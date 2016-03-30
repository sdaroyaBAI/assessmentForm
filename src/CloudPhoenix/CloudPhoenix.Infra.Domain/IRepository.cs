using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloudPhoenix.Infra.Domain
{
    public interface IRepository
    {
        DataSet GetEntity(int entityID, string procName);
        DataSet GetEntity(string procName, Dictionary<string, object> parameters);
        void SaveEntity(string procName, Dictionary<string, object> parameters);
        int InsertEntity(string procName, Dictionary<string, object> parameters);
        void UpdateEntity(string procName, Dictionary<string, object> parameters);
        void DeleteEntity(string procName, Dictionary<string, object> parameters);
    }
}
