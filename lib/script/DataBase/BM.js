function BMDataBase () {
  var self = this;
  this.BMParams = {
    path: 'widget://res/LoanDoctor',
    dbName: 'LoanDoctor',
    tableArr: ['AreaCode'],
  };
  this.db = new DataBase(this.BMParams);
  
  this.selectAreaCode = function (args) {
    params = {
      sync: false,
      sql: 'SELECT * FROM AreaCode;',
      operation: args.operation
    }
    self.db.select(params);
  }
  
  this.db.openDB({sync: true});
}