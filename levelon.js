var level = require('level'),
    db = level(process.argv[2]);

db.get('levelmeup', function(err, value){
  console.log(value);
});
