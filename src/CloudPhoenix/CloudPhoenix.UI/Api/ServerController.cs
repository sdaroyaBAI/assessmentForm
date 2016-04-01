using CloudPhoenix.Infra.Domain;
using CloudPhoenix.Infra.Model;
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

        public IHttpActionResult Post([FromBody]Server value)
        {
            var uspParam = new Dictionary<string, object>();



            try
            {
                uspParam.Add("@CompanyId", value.CompanyID);
                uspParam.Add("@ServerId", value.ServerId);
                uspParam.Add("@Server", value.ServerName);
                uspParam.Add("@ServerType", value.ServerType);
                uspParam.Add("@Processor", value.Processor);
                uspParam.Add("@Memory", value.Memory);
                uspParam.Add("@HardDisk", value.HardDisk);
                uspParam.Add("@ApplicationsRunning", value.ApplicationsRunning);
                uspParam.Add("@CriticalNonCritical", value.CriticalNonCritical);
                uspParam.Add("@UpdatedBy", value.UpdatedBy);
                uspParam.Add("@DateCreated", value.DateCreated.Date);
                uspParam.Add("@CreatedBy", value.CreatedBy);


                _comRepo.UpdateEntity("usp_company_server_update", uspParam);

                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }

           

        }
    }
}
