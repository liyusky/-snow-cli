function DataBase() {
  var self = this;
  this.dbName = 'ZhangBen';
  this.tableArr = ['User', 'Bill', 'Reminder'];
  this.db = api.require('db');

  this.init = function () {
    this.openDB({
      success: function () {
        if (self.hasTable('Ban')) {
          self.creatTable('User');
        }
        if (self.hasTable('Bill')) {
          self.creatTable('Bill');
        }
        if (self.hasTable('Reminder')) {
          self.creatTable('Reminder');
        }
      }
    });
  };

  this.openDB = function (content) {
    this.db.openDatabase({
        name: this.dbName
      },
      function (ret, err) {
        if (ret) {
          if (ret.status) {
            content.success();
          } else {
            content.fail();
          }
        }

        if (err) {
          content.error();
        }

        try {
          content.default();
        } catch (e) {}
      }
    );
  };

  this.execute = function (content) {
    if (content.sync) {
      var result = this.db.executeSqlSync({
        name: this.dbName,
        sql: content.sql
      });
      return result;
    } else {
      this.db.executeSql({
          name: this.dbName,
          sql: content.sql
        },
        function (ret, err) {
          // alert(JSON.stringify(ret));
          // alert(JSON.stringify(err));
          if (ret) {
            if (ret.status) {
              try {
                content.success();
              } catch (e) {}
            } else {
              try {
                content.fail();
              } catch (e) {}
            }
          }

          if (err) {
            try {
              content.error();
            } catch (e) {}
          }

          try {
            content.default();
          } catch (e) {}
        }
      );
    }
  };

  this.selectSql = function (content) {
    if (content.sync) {
      var result = this.db.selectSqlSync({
        name: this.dbName,
        sql: content.sql
      });
      return result;
    } else {
      this.db.selectSql({
          name: this.dbName,
          sql: content.sql
        },
        function (ret, err) {
          // alert(JSON.stringify(ret));
          // alert(JSON.stringify(err));
          if (ret) {
            if (ret.status) {
              try {
                content.success(ret.data);
              } catch (e) {}
            } else {
              try {
                content.fail(ret);
              } catch (e) {}
            }
          }

          if (err) {
            try {
              content.error(err);
            } catch (e) {}
          }

          try {
            content.default();
          } catch (e) {}
        }
      );
    }
  }

  this.hasTable = function (table) {
    var result = false;
    var sql = 'SELECT COUNT(*) FROM sqlite_master where type = "table" and name = "' + table + '";';
    var ret = this.selectSql({
      sync: true,
      sql: sql
    });
    if (ret.status) {
      if (ret.data[0]['COUNT(*)'] === '0') {
        result = true;
      }
    }

    return result;
  };

  this.creatTable = function (table) {
    var sql = null;
    switch (table) {
      case 'User':
        sql = 'CREATE TABLE [User](' +
          '[phone] VARCHAR(11) NOT NULL, ' +
          '[password] VARCHAR(20) NOT NULL);'
        break;
      case 'Bill':
        sql = 'CREATE TABLE [Bill](' +
          '[phone] VARCHAR(11) NOT NULL, ' +
          '[type] VARCHAR(255) NOT NULL, ' +
          '[income] VARCHAR(255) NOT NULL DEFAULT 0, ' +
          '[pay] VARCHAR(255) NOT NULL DEFAULT 0, ' +
          '[date] TEXT(255) NOT NULL, ' +
          '[remark] TEXT(1024), ' +
          '[month] INT(2) NOT NULL);';
        break;
      case 'Reminder':
        sql = 'CREATE TABLE [Reminder](' +
          '[phone] VARCHAR(11) NOT NULL, ' +
          '[date] TEXT(255) NOT NULL);';
        break;
    }
    this.execute({
      sql: sql
    });
  };

  this.select = function (content) {
    var sql = null;
    switch (content.table) {
      case 'User':
        sql = 'SELECT password FROM User WHERE phone = "' + content.phone + '";';
        break;
      case 'Bill':
        sql = 'SELECT rowid, income, pay, type, date, phone, remark, month FROM Bill WHERE phone = "' + content.phone + '" AND month = "' + content.month + '" ORDER BY rowid DESC;';
        break;
      case 'Reminder':
        sql = 'SELECT rowid, phone, date FROM Reminder WHERE phone = "' + content.phone + '" ORDER BY rowid DESC;';
        break;
    }
    this.selectSql({
      sql: sql,
      success: function (data) {
        // alert(JSON.stringify(data))
        try {
          content.success(data);
        } catch (e) {}
      }
    });
  };

  this.insert = function (content) {
    var sql = null;
    switch (content.table) {
    case 'User':
      sql = 'INSERT INTO User (phone, password) VALUES ("' + content.data.phone + '", "' + content.data.password + '");';
      break;
    case 'Bill':
      sql = 'INSERT INTO Bill (phone, type, income, pay, date, remark, month) VALUES ("' + content.data.phone + '", "' + content.data.type + '", "' + content.data.income + '", "' + content.data.pay + '", "' + content.data.date + '", "' + content.data.remark + '", ' + content.data.month + ');';
      break;
    case 'Reminder':
      sql = 'INSERT INTO Reminder (phone, date) VALUES ("' + content.data.phone + '", "' + content.data.date + '");';
      break;
    }
    this.execute({
      sql: sql,
      success: function (ret) {
        try {
          content.success();
        } catch (e) {}
      },
      fail: function () {
        try {
          content.fail();
        } catch (e) {}
      },
      error: function () {
        try {
          content.error();
        } catch (e) {}
      },
      default: function () {
        try {
          content.default();
        } catch (e) {}
      }
    });
  };

  this.delete = function (content) {
    var sql = null;
    switch (content.table) {
      case 'Bill':
        sql = 'DELETE FROM Bill WHERE rowid = ' + content.rowid + ';';
        break;
      case 'Reminder':
        sql = 'DELETE FROM Reminder WHERE rowid = "' + content.rowid + '";';
        break;
    }
    this.execute({
      sql: sql,
      success: function (ret) {
        try {
          content.success();
        } catch (e) {}
      }
    });
  };

  this.update = function (content) {
    var sql = null;
    sql = 'UPDATE User SET password = "' + content.password + '" WHERE phone = "' + content.phone + '";';
    this.execute({
      sql: sql,
      success: function () {
        try {
          content.success();
        } catch (e) {}
      },
      fail: function () {
        alertMsg('修改失败');
      },
      error: function () {
        alertMsg('修改失败');
      }
    });
  };

  this.dropTable = function (table) {
    var sql = 'DROP TABLE ' + table + ';';
    this.execute({
      sql: sql
    });
  };

  this.getPaySum = function (phone, month) {
    var sql = 'SELECT SUM(pay) FROM Bill WHERE phone = "' + phone + '" AND month = "' + month + '";';
    var result = this.selectSql({
      sync: true,
      sql: sql
    });
    var count = 0;
    if (result.status && result.data[0]['SUM(pay)']) {
      count = result.data[0]['SUM(pay)'];
    }
    return count;
  };

  this.getIncomeSum = function (phone, month) {
    var sql = 'SELECT SUM(income) FROM Bill WHERE phone = "' + phone + '" AND month = "' + month + '";';
    var result = this.selectSql({
      sync: true,
      sql: sql
    });
    var count = 0;
    if (result.status && result.data[0]['SUM(income)']) {
      count = result.data[0]['SUM(income)'];
    }
    return count;
  };

  this.getMaxRowid = function (content) {
    var sql = null;
    switch (content.table) {
      case 'Bill':
        sql = 'SELECT MAX(rowid) FROM Bill;';
        break;
      case 'Reminder':
        sql = 'SELECT MAX(rowid) FROM Reminder;';
        break;
    }
    this.selectSql({
      sql: sql,
      success: function (data) {
        var index = 0;
        try {
          if (data[0]['MAX(rowid)']) {
            index = data[0]['MAX(rowid)'];
          }
          content.success(index);
        } catch (e) {}
      }
    });
  }

  this.getCount = function (content) {
    var sql = null;
    switch (content.table) {
      case 'Bill':
        sql = 'SELECT COUNT(rowid) FROM Bill WHERE phone = "' + content.phone + '";';
        break;
      case 'Reminder':
        sql = 'SELECT COUNT(rowid) FROM Reminder WHERE phone = "' + content.phone + '";';
        break;
    }
    var result = this.selectSql({
      sync: true,
      sql: sql
    });
    var count = 0;
    if (result.status && result.data[0]['COUNT(pay)']) {
      count = result.data[0]['COUNT(income)'];
    }
    return count;
  }

  this.init();

  // this.dropTable('User');
  // this.dropTable('Bill');
  // this.dropTable('Reminder');

}
