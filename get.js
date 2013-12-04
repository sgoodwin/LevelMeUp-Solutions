var level = require('level'),
    db = level(process.argv[2]),
    baseKey = 'gibberish',
    i = 0,
    key = '';

function fetch(key){
  db.get(key, function(err, value){
    if(err){
      return;
    }

    console.log(key+'='+value);
  });
}

for(i=0;i<=100;i++){
  key = baseKey + i;
  fetch(key);
}
