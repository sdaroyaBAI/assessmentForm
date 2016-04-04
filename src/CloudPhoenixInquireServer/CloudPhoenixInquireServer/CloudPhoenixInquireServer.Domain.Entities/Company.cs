using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CloudPhoenixInquireServer.Domain.Entities
{
    public class Company
    {
        [Required, Key]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        public string OfficeAddress { get; set; }
        public string ContactPerson { get; set; }
        public string Designation { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public int NoOfServers { get; set; }
        public string Brand { get; set; }
        public double Bandwidth { get; set; }
        public string ActiveDirectoryExists { get; set; }
        public DateTime DateCreated { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
