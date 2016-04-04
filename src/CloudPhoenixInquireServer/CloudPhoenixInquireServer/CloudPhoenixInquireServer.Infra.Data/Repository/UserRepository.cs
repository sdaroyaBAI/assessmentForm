using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CloudPhoenixInquireServer.Domain;
using CloudPhoenixInquireServer.Domain.Entities;

namespace CloudPhoenixInquireServer.Infra.Data
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(ICloudPhoenixInquireServerDbContext context)
            : base(context)
        {

        }
    }
}