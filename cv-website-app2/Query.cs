using System.Collections.Generic;
using GraphQL;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace UPS.Function
{
    public class Query
    {
        [GraphQLMetadata("games")]
        public async Task<IEnumerable<Game>> GetGames()
        {
            TableQuery<Game> gameQuery = new TableQuery<Game>();
            var games = await GetAll<Game>(Creds.connectionKey, DB.gameTableName, gameQuery);
            string gameId = games.ToList().First().Id;

            TableQuery<Link> linkQuery = new TableQuery<Link>();
            var links = await GetAll<Link>(Creds.connectionKey, DB.linkTableName, linkQuery);

            return games.Select(
                game => {
                    game.links = links.ToList().FindAll(
                        link => link.GameId == game.Id
                    );
                    return game;
            });
        }

        [GraphQLMetadata("game")]
        public async Task<Game> GetGame()
        {
            TableQuery<Game> gameQuery = new TableQuery<Game>();
            var games = await GetAll<Game>(Creds.connectionKey, DB.gameTableName, gameQuery);
            Game latestGame = games.OrderBy(game => game.ReleasedDate).Last();

            latestGame.links = (await GetLink(latestGame.Id)).ToList();
            return latestGame;
        }

        [GraphQLMetadata("skills")]
        public async Task<IEnumerable<SkillGroup>> GetSkills()
        {
            TableQuery<DBSkillGroup> skillsQuery = new TableQuery<DBSkillGroup>();
            var skills = await GetAll<DBSkillGroup>(Creds.connectionKey, DB.skillsTableName, skillsQuery);

            return skills.Select(skill => new SkillGroup(){
                Id = skill.Id,
                Title = skill.Title,
                Keys = skill.Keys.Split(','),
                Values = skill.Values.Split(','),
                Color = skill.Color
            });
        }

        [GraphQLMetadata("likes")]
        public async Task<IEnumerable<Like>> GetLike()
        {
            TableQuery<Like> likeQuery = new TableQuery<Like>();
            var likes = await GetAll<Like>(Creds.connectionKey, DB.likesTableName, likeQuery); 

            return likes.Select(
                like => new Like() {
                    TargetId = like.TargetId,
                    Type = like.Type,
                    Count = like.Count
                }
            );
        }

        [GraphQLMetadata("getUserById")]
        public async Task<IEnumerable<User>> GetUserById(string id)
        {
            if (string.IsNullOrEmpty(id)) {
                return null;
            }
            
            TableQuery<User> userQuery = new TableQuery<User>().Where(
                TableQuery.GenerateFilterCondition("Id", QueryComparisons.Equal, id)
            );
            return await GetUser(userQuery);
        }

        public static async Task<IEnumerable<User>> GetUser(TableQuery<User> tableQuery)
        {
            return await GetAll<User>(Creds.connectionKey, DB.usersTableName, tableQuery);
        }

        public async Task<IEnumerable<Game>> AddGamesLinks(IEnumerable<Game> games)
        {
            TableQuery<Link> linkQuery = new TableQuery<Link>();
            List<Link> links = (await GetAll<Link>(Creds.connectionKey, DB.linkTableName, linkQuery)).ToList();

            return games.Select(game => {
                List<Link> filteredLinks = links.FindAll(link => link.GameId == game.Id);
                game.links = filteredLinks.Select(
                    link => new Link() {
                        Id = link.Id,
                        GameId = link.GameId,
                        Url = link.Url,
                        Type = link.Type,
                    }
                ).ToList();
                return game;
            });
        }

        public async Task<IEnumerable<Link>> GetLink(string gameId)
        {
            TableQuery<Link> linkQuery = new TableQuery<Link>().Where(
                TableQuery.GenerateFilterCondition("GameId", QueryComparisons.Equal, gameId)
            );
            return await GetAll<Link>(Creds.connectionKey, DB.linkTableName, linkQuery);
        }

        public static async Task<IEnumerable<T>> GetAll<T>(string connectionKey, string tableName, TableQuery<T> query) where T : ITableEntity, new()
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionKey);
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient(); 
            CloudTable table = tableClient.GetTableReference(tableName);

            TableContinuationToken token = null;
            List<T> games = new List<T>();
            do
            {
                var page = await table.ExecuteQuerySegmentedAsync(query, token);
                try
                {
                    games.AddRange(page.Results as IEnumerable<T>);
                }
                catch (System.Exception ex)
                {
                    Server.logger.LogInformation(ex.ToString());
                }
                token = page.ContinuationToken;
            }
            while (token != null);
            return games;
        }

        [GraphQLMetadata("hello")]
        public string GetHello()
        {
        return "World";
        }
    }

}