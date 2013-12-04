module.exports = function(db, dateString, callback){
  var date = new Date(dateString),
      count = 0;
  
  db.createReadStream({start: date.toISOString()}).on('data', function(data){
    count++;
  }).on('end', function(){
    callback(null, count);
  }).on('error', function(err){
    callback(err, 0);
  });
};
