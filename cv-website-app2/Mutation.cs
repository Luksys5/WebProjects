using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace UPS.Function {
    public class Mutation
    {
        [GraphQLMetadata("likeGame")]
        public async Task<Like> LikeGame(string userId, string targetId, int type) 
        {
            // check if user exist and whether liked the game
            string filter = TableQuery.CombineFilters(
                TableQuery.GenerateFilterCondition("Id", QueryComparisons.Equal, userId),
                TableOperators.And,
                TableQuery.GenerateFilterCondition("LikeId", QueryComparisons.Equal, targetId)
            );
            TableQuery<User> userQuery =  new TableQuery<User>().Where(filter);
            var users = await UPS.Function.Query.GetUser(userQuery);
            var userAlreadyLikedGame = users.ToList().Any(user => user != null && user.LikeId == targetId);
            if (userAlreadyLikedGame)
            {
                return null;
            }

            // add user to table
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(Creds.connectionKey);
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient(); 
            CloudTable userTable = tableClient.GetTableReference(DB.usersTableName);
            TableOperation userTableOp = TableOperation.Insert(
                new User() {
                    ETag = "*",
                    PartitionKey = DB.partitionKey,
                    RowKey = System.Guid.NewGuid().ToString(), 
                    Id = userId,
                    LikeId = targetId
                }
            );
            
            await userTable.ExecuteAsync(userTableOp);


            CloudTable likesTable = tableClient.GetTableReference(DB.likesTableName);
            TableQuery<Like> likeQuery = new TableQuery<Like>();
            var likes = await Query.GetAll<Like>(Creds.connectionKey, DB.likesTableName, likeQuery);
            List<Like> likeList = likes.ToList();

            var alreadyExist = likeList.Exists(like => like.TargetId == targetId && like.Type == type);
            if (alreadyExist)
            {
                var like = likeList.Find(like => like.TargetId == targetId && like.Type == type);
                TableOperation tableOperation = TableOperation.Merge(
                    new Like() {
                        ETag = "*",
                        PartitionKey = like.PartitionKey,
                        RowKey = like.RowKey, 
                        TargetId = targetId,
                        Type = type,
                        Count = like.Count + 1
                    }
                );
                
                TableResult result = await likesTable.ExecuteAsync(tableOperation);
                Server.logger.LogInformation(result.Result.ToString());
                return result.Result as Like;
            }
            else
            {
                TableOperation tableOperation = TableOperation.Insert(
                    new Like() {
                        ETag = "*",
                        PartitionKey = DB.partitionKey,
                        RowKey = likes.Count().ToString(), 
                        TargetId = targetId,
                        Type = type,
                        Count = 1 
                    }
                );
                
                TableResult result = await likesTable.ExecuteAsync(tableOperation);
                return result.Result as Like;
            }
        }
    }
}