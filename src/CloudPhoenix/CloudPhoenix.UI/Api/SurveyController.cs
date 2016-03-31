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
    public class SurveyController : ApiController
    {
        private ICompanyRepository _comRepo;
        public SurveyController(ICompanyRepository comRepo)
        {
            _comRepo = comRepo;
        }

        public IHttpActionResult Get(int id)
        {
            var uspParam = new Dictionary<string, object>();

            uspParam.Add("@companyId", id);
            var results = _comRepo.GetEntity("usp_company_survey_get", uspParam);

            return Ok(new { survey = results });
        }

        public IHttpActionResult Post([FromBody]List<Survey> value)
        {
            var uspParam = new Dictionary<string, object>();

            foreach (var item in value)
            {
                uspParam.Add("@CompanyId", item.CompanyID);
                uspParam.Add("@QuestionSetID", item.QuestionSetID);
                uspParam.Add("@AnswerSetID", item.AnswerSetID);

                _comRepo.UpdateEntity("usp_company_survey_update", uspParam);
            }

            return Ok();

        }
    }
}
