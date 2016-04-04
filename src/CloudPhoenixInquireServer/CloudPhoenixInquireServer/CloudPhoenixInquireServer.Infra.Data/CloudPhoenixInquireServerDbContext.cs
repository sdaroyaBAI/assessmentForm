using CloudPhoenixInquireServer.Domain.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloudPhoenixInquireServer.Infra.Data
{
    public class CloudPhoenixInquireServerDbContext : IdentityDbContext<IdentityUser>
                    , ICloudPhoenixInquireServerDbContext
    {
        public CloudPhoenixInquireServerDbContext()
            : base("DefaultConnection")
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Server> Servers { get; set; }
        public DbSet<Survey> Survey { get; set; }
        public DbSet<QuestionSet> Questions { get; set; }
        public DbSet<AnswerSet> Answers { get; set; }


    }
}

