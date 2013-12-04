var level = require('level'),
    db = level(process.argv[2]),
    jsonObject = JSON.parse(process.argv[3]);

Object.keys(jsonObject).forEach(function(key){
  db.put(key, jsonObject[key]);
});
