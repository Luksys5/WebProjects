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
                    links: [Link]
                }

                type SkillGroup {
                    title: String,
                    keys: [String],
                    values: [String],
                    color: String
                }

                type Query {
                    games: [Game],
                    game: Game,
                    skills: [SkillGroup]
                }
            ", _ =>
            {
                _.Types.Include<Query>();
                _.Types.Include<Mutation>();
            });
            
        }
        
        public async Task<string> QueryAsync(string query, ILogger log) 
        {
            logger = log;
            log.LogInformation("Before execution");
            var result = await new DocumentExecuter().ExecuteAsync(_ =>
            {
                _.Schema = schema;
                _.Query = query;
            });
            log.LogInformation("After execution");

            if(result.Errors != null) {
                return result.Errors[0].Message;
            } else {
                return JsonConvert.SerializeObject(result);
            }
        }
    }
}