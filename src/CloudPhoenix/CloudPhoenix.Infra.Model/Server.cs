using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPhoenix.Model
{
    public class Server
    {
        public int CompanyID { get; set; }
        public string ServerName { get; set; }
        public string ServerType { get; set; }
        public string Processor { get; set; }
        public string Memory { get; set; }
        public string HardDisk { get; set; }
        public string ApplicationsRunning { get; set; }
        public string CriticalNonCritical { get; set; }
    }

}
