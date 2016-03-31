using CloudPhoenix.Common;
using CloudPhoenix.Infra.Domain;
using CloudPhoenix.Infra.Model;
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
        private ICompanyRepository _comRepo;

        public CompanyController(ICompanyRepository comRepo)
        {
            _comRepo = comRepo;
        }

        public HttpResponseMessage GetAll()
        {
            var uspParam = new Dictionary<string, object>();
            var companies = "[]";

            try
            {
                //_comRepo = new CompanyRepository(new CloudPhoenixDbContext());
                var comList = _comRepo.GetEntity("usp_company_list", new Dictionary<string, object>());

                if (comList.Tables[0] != null)
                {
                    companies = JsonConvert.SerializeObject(comList.Tables[0]);
                }

                return this.Request.CreateResponse(HttpStatusCode.OK, new { company_list = companies });

            }
            catch (Exception ex)
            {
                return this.Request.CreateResponse(HttpStatusCode.BadRequest, ex.GetBaseException().Message);
            }
        }

        public HttpResponseMessage GetCompanyDetail(int id)
        {
            var uspParam = new Dictionary<string, object>();
            var companyDetail = "[]";

            try
            {
                //_comRepo = new CompanyRepository(new CloudPhoenixDbContext());

                uspParam.Add("@companyId", id);
                var comDetail = _comRepo.GetEntity("usp_company_detail_get", uspParam);

                if (comDetail.Tables[0] != null)
                {
                    companyDetail = JsonConvert.SerializeObject(comDetail.Tables[0]);
                }
                return this.Request.CreateResponse(HttpStatusCode.OK, new { company_detail = companyDetail });
            }
            catch (Exception ex)
            {
                return this.Request.CreateResponse(HttpStatusCode.BadRequest, ex.GetBaseException().Message);
            }
        }

        public IHttpActionResult Post([FromBody]Company value)
        {
            var uspParam = new Dictionary<string, object>();

            uspParam.Add("@CompanyId", value.CompanyID);
            uspParam.Add("@Name", value.CompanyName);
            uspParam.Add("@OfficeAddress", value.OfficeAddress);
            uspParam.Add("@ContactPerson", value.ContactPerson);
            uspParam.Add("@Designation", value.Designation);
            uspParam.Add("@Email", value.Email);
            uspParam.Add("@ContactNumber", value.ContactNumber);
            uspParam.Add("@NoOfServers", value.NoOfServers);
            uspParam.Add("@Brand", value.Brand);
            uspParam.Add("@Bandwith", value.Bandwith);
            uspParam.Add("@ActiveDirectoryExists", value.ActiveDirectoryExists);
            uspParam.Add("@DateCreated", value.DateCreated);
            uspParam.Add("@Createdby", value.CreatedBy);
            uspParam.Add("@UpdatedBy", value.UpdatedBy); 
             
            _comRepo.UpdateEntity("usp_company_update", uspParam);

            return Ok();
        }

    }
}
