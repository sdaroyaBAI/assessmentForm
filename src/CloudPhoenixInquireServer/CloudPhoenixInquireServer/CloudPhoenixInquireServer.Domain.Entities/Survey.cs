using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CloudPhoenixInquireServer.Domain.Entities
{
    public class Survey
    {
        [Required, Key]
        public string SurveyID { get; set; }
        [Required]
        public int CompanyID { get; set; }
        [Required]
        public int QuestionSetID { get; set; }
        [Required]
        public int AnswerSetID { get; set; }
        public string UpdatedBy { get; set; }
        public string CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }

    }
}
