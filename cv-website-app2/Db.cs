using System;
using System.Collections.Generic;
using Microsoft.WindowsAzure.Storage.Table;

namespace UPS.Function
{
    public class DB
    {
        public static string partitionKey = "UPS";
        public static string gameTableName = "games";
        public static string skillsTableName = "skillMatrix";
        public static string linkTableName = "links";
        public static string likesTableName = "likes";
        public static string commentsTableName = "comments";
        public static string usersTableName = "users";
    }

    public class Link : TableEntity
    {
        public string Id { get; set; }
        public string GameId { get; set; }
        public string Url { get; set; }
        public int Type { get; set; }
    }

    public class Game : TableEntity
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime ReleasedDate { get; set; }
        public string ImgName { get; set; }
        public string Devices { get; set; }
        public List<Link> links { get; set; }
    }

    public class Like : TableEntity
    {
        public string Id { get; set; }
        public string TargetId { get; set; }
        public int Type { get; set; }
        public int Count { get; set; }
    }

    public class Comment: TableEntity
    {
        public string Id { get;set; }
        public string RootId { get;set; }
        public string UserId { get;set; }
        public string Text { get;set; }
        public string Name { get;set; }
        public DateTime Date { get;set; }
    }

    public class DBSkillGroup : TableEntity
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

    public class User: TableEntity
    {
        public string Id { get; set; }
        public string LikeId { get; set; }
    }
}