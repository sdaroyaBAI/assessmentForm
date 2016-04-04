using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloudPhoenixInquireServer.Domain.Entities
{
    public class Server
    {
        [Required, Key]
        public int ServerID { get; set; }
        [Required]
        public int CompanyID { get; set; }
        [Required]
        public string ServerName { get; set; }
        public string ServerType { get; set; }
        public string Processor { get; set; }
        public string Memory { get; set; }
        public string HardDisk { get; set; }
        public string ApplicationsRunning { get; set; }
        public string Critical { get; set; }
        public string UpdatedBy { get; set; }
        public string CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
