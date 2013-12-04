var net = require('net'),
    level = require('level'),
    multilevel = require('multilevel'),
    db = multilevel.client(),
    connection = net.connect(4545);

connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function(err, data){
  console.log(data);
  connection.end();
});
