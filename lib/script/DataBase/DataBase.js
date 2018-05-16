function DataBase(params) {
  var self = this;
  this.db = api.require('db');
  this.name = params.dbName || 'LoanDoctor';
  this.path = params.path || 'widget://res/LoanDoctor';
  this.tableArr = params.tableArr;

  this.openDB = function (params) {
    if (params.sync) {
      let ret = this.db.openDatabaseSync({
        name: this.name,
        path: this.path        
      });
      this.operationSync(ret, params.operation);
    }
    else {
      this.db.openDatabase(
        {
          name: this.name,
          path: this.path
        },
        function (ret, err) {
          alert(JSON.stringify(ret))
          alert(JSON.stringify(err))
          self.operation(ret, err, params.operation);
        }
      );
    }
  };

  this.execute = function (params) {
    if (params.sync) {
      let ret = this.db.executeSqlSync({
        name: this.name,
        sql: params.sql
      });
      this.operationSync(ret, params.operation);
    }
    else {
      this.db.executeSql(
        {
          name: this.name,
          sql: params.sql
        },
        function (ret, err) {
          self.operation(ret, err, params.operation);
        }
      );
    }
  };

  this.select = function (params) {
    if (params.sync) {
      var ret = this.db.selectSqlSync({
        name: this.name,
        sql: params.sql
      });
      this.operationSync(ret, params.operation);
    }
    else {
      this.db.selectSql(
        {
          name: this.name,
          sql: params.sql
        },
        function (ret, err) {
          self.operation(ret, err, params.operation);
        }
      );
    }
  };

  this.hasTable = function (params) {
    var result = false;
    this.select(formatParams(params));

    function formatParams (params) {
      return {
        sync: params.sync ? true : false,
        sql: 'SELECT COUNT(*) FROM sqlite_master where type = "table" and name = "' + params.table + '";',
        operation: {
          success: function (data) {
            if (data[0]['COUNT(*)'] * 1 === 0) result = true;
          },
          default: function (data) {
            return result;
          }
        }
      }
    }
  };

  this.dropTable = function (params) {
    this.execute(formatParams(params));

    function formatParams (params) {
      return {
        sync: params.sync ? true : false,
        sql: 'DROP TABLE ' + params.table + ';',
        operation: {
          success: function (data) {
            toast(params.table + ' drop success');
          },
          fail: function (data) {
            toast(params.table + ' drop fail');
          },
          err: function (data) {
            toast(params.table + ' has an err occurred');
          }
        }
      }
    }
  };

  this.operation = function (ret, err, operation) {
    if (ret) {
      if (ret.status) {
        try {
          operation.success(ret.data);
        } catch (e) { }
      }
      else {
        try {
          operation.fail(ret);
        } catch (e) { }
      }
    }

    if (err) {
      try {
        operation.err(err);
      } catch (e) { }
    }

    try {
      operation.default();
    } catch (e) { }
  };

  this.operationSync = function (ret, operation) {
    if (ret) {
      if (ret.status) {
        try {
          operation.success(ret.data);
        } catch (e) { }
      }
      else {
        try {
          operation.fail(ret);
        } catch (e) { }
      }
    }
    else {
      try {
        operation.err(ret);
      } catch (e) { }
    }

    try {
      operation.default();
    } catch (e) { }
  };

}