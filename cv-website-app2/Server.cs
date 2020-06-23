using GraphQL;
using GraphQL.Types;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace UPS.Function {
    public class Server 
    {
        public static ILogger logger;
        private ISchema schema { get; set; }
        public Server()
        {
            this.schema = Schema.For(@"
                type Link {
                    id: String,
                    gameId: String,
                    url: String,
                    type: Int
                }

                type Game {
                    id: String,
                    title: String,
                    description: String,
                    imgName: String,
                    releasedDate: DateTime,
                    devices: String,
                    links: [Link]
                }

                type SkillGroup {
                    title: String,
                    keys: [String],
                    values: [String],
                    color: String
                }

                type Like {
                    id: String,
                    targetId: String, 
                    type: Int,
                    count: Int
                }

                type Comment {
                    id: String,
                    rootId: String
                    userId: String,
                    text: String,
                    name: String,                    
                    date: DateTime
                }

                type User {
                    Id: String,
                    LikeId: String
                }

                type Mutation {
                    likeGame(userId: String, targetId: String, type: Int): Like
                }

                type Query {
                    games: [Game],
                    skills: [SkillGroup],
                    likes: [Like],
                    comments: [Comment],
                    getUserById(id: String): [User],
                    game: Game
                }
            ", _ =>
            {
                _.Types.Include<Query>();
                _.Types.Include<Mutation>();
            });
            
        }
        
        public async Task<string> QueryAsync(string query, string variablesJson, ILogger log) 
        {
            logger = log;
            log.LogInformation("Before execution");
            var inputs = variablesJson.ToInputs();
            var result = await new DocumentExecuter().ExecuteAsync(_ =>
            {
                _.Schema = schema;
                _.Query = query;
                _.Inputs = inputs;
            });
            log.LogInformation("After execution");
            log.LogInformation(result.Data.ToString());

            if(result.Errors != null) {
                return result.Errors[0].Message;
            } else {
                return JsonConvert.SerializeObject(result);
            }
        }
    }
}