var level = require('level'),
    db = level(process.argv[2]),
    fs = require('fs');

fs.readFile(process.argv[3], function(err, data){
  var lines = data.toString().split('\n');

  var operations = [];

  lines.forEach(function(line){
    var chunks = line.split(',');
    if(chunks.length === 2){
      operations.push({ type: chunks[0], key: chunks[1]});
    }else{
      operations.push({ type: chunks[0], key: chunks[1], value: chunks[2]});
    }
  });

  db.batch(operations);
});
