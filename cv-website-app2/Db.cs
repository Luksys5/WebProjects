using System;
using System.Collections.Generic;
using Microsoft.WindowsAzure.Storage.Table;

namespace UPS.Function
{
    public class DB
    {
        public static string gameTableName = "games";
        public static string skillsTableName = "skillMatrix";
        public static string linkTableName = "links";
    }
    
    public class Link: TableEntity {
        public string Id { get; set; }
        public string GameId { get; set; }
        public string Url { get; set; }
        public int Type { get; set; }
    }

    public class Game: TableEntity
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime ReleasedDate { get; set; }
        public string ImgName { get; set; }
        public List<Link> links { get; set; }
    }

    public class DBSkillGroup: TableEntity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Keys { get; set; }
        public string Values { get; set; }
        public string Color { get; set; }

    }

    public class SkillGroup
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string[] Keys { get; set; }
        public string[] Values { get; set; }
        public string Color { get; set; }
    }
}