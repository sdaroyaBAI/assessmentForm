using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace CloudPhoenix.Common
{
    public interface ICloudPhoenixDbContext
    {
        int ExecuteSaveProcedure(string procName, List<SqlParameter> parameters);
        void ExecuteUpdateProcedure(string procName, List<SqlParameter> parameters);
        DataSet GetTable(string storedProcedure, Dictionary<string, object> parameters);
        DataSet ExecuteStoredProcedure(string procName, List<SqlParameter> parameters);
        void ExecuteDeleteProcedure(string procName, List<SqlParameter> parameters);
        string ConnString { get; }
    }
}