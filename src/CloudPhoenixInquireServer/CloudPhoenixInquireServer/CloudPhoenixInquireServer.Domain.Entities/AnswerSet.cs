using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloudPhoenixInquireServer.Domain.Entities
{
    public class AnswerSet
    {
        [Required, Key]
        public int AnswerSetID { get; set; }
        public int Answer { get; set; }
    }
}
