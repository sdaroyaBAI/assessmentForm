using CloudPhoenix.Infra.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CloudPhoenix.UI.Api
{
    public class ServerController : ApiController
    {
        private ICompanyRepository _comRepo;
        public ServerController(ICompanyRepository comRepo)
        {
            _comRepo = comRepo;
        }
        public IHttpActionResult Get(int id)
        {
            var uspParam = new Dictionary<string, object>();

            uspParam.Add("@companyId", id);
            var results = _comRepo.GetEntity("usp_company_server_list", uspParam);

            return Ok(new { servers = results });
        }
    }
}
