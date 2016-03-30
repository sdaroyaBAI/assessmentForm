using CloudPhoenix.Common;
using CloudPhoenix.Infra.Domain;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CloudPhoenix.UI.Api
{
    public class CompanyController : ApiController
    {
        private CompanyRepository _comRepo;
        

        public void GetAll()
        {
            _comRepo = new CompanyRepository(new CloudPhoenixDbContext());
            var comList = _comRepo.GetEntity("usp_company_list", new Dictionary<string, object>());

            var companies =  JsonConvert.SerializeObject(comList.Tables[0]);
        }
    }
}
