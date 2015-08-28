var server = require('./server');
var dataSource = server.dataSources.pg
var Inventory = server.models.inventory;

dataSource.automigrate("inventory", function(){
  dataSource.disconnect();
});
