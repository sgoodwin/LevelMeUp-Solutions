var level = require('level'),
    db = level(process.argv[2], { valueEncoding: 'json' }),
    jsonData = require(process.argv[3]);

console.error(jsonData);

jsonData.forEach(function(row){
  if(row.user){
    db.put(row.user + '!' + row.name, row);
  } else {
    db.put(row.name, row);
  }
});
