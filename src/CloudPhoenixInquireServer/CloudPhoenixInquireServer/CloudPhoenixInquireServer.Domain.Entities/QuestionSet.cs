using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloudPhoenixInquireServer.Domain.Entities
{
    public class QuestionSet
    {
        [Required, Key]
        public int QuestionSetID { get; set; }
        public string Question { get; set; }
    }
}
