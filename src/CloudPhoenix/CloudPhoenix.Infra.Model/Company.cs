using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPhoenix.Infra.Model
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class Company
    {
        public int CompanyID { get; set; }
        public string CompanyName { get; set; }
        public string OfficeAddress { get; set; }
        public string ContactPerson { get; set; }
        public string Designation { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public int NoOfServers { get; set; }
        public string Brand { get; set; };
        public double Bandwidth { get; set; }
        public string ActiveDirectoryExists { get; set; }
        public DateTime DateCreated { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
