using CloudPhoenixInquireServer.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloudPhoenixInquireServer.Infra.Data
{
    public interface ICloudPhoenixInquireServerDbContext
    {
        DbSet<User> Users { get; set; }
        DbSet<Company> Companies { get; set; }
        DbSet<Server> Servers { get; set; }
        DbSet<Survey> Survey { get; set; }
        DbSet<QuestionSet> Questions{ get; set; }
        DbSet<AnswerSet> Answers { get; set; }
        int SaveChanges();
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
    }
}
