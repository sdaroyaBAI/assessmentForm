using CloudPhoenix.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloudPhoenix.Infra.Domain
{
    public class CompanyRepository : RepositoryBase, ICompanyRepository
    {
        public CompanyRepository(ICloudPhoenixDbContext context)
            : base(context)
        {
        }
    }
}
