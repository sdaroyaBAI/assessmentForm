using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPhoenix.Infra.Model
{
    public class Survey
    {
        public int CompanyID { get; set; }
        public int QuestionSetID { get; set; }
        public int AnswerSetID { get; set; }
        public string UpdatedBy { get; set; }
        public string CreatedBy { get; set; }
        public string SurveyID { get; set; }
        public DateTime DateCreated { get; set; }

    }
}
