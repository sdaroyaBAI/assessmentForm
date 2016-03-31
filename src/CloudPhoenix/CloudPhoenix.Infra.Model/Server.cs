using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPhoenix.Infra.Model
{
    public class Server
    {
        public int CompanyID { get; set; }
        public int ServerId { get; set; }
        public string ServerName { get; set; }
        public string ServerType { get; set; }
        public string Processor { get; set; }
        public string Memory { get; set; }
        public string HardDisk { get; set; }
        public string ApplicationsRunning { get; set; }
        public string CriticalNonCritical { get; set; }
        public string UpdatedBy { get; set; }
        public string CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
    }

}
