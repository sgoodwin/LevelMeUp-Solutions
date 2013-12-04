module.exports = function(db, dateString, callback){
  var date = new Date(dateString),
      tweets = [];

  var endDate = new Date(date);
  endDate.setDate(date.getDate()+1);

  db.createReadStream({start: date.toISOString(), end: endDate.toISOString()}).on('data', function(data){
    tweets.push(data.value);
  }).on('end', function(){
    callback(null, tweets);
  }).on('error', function(err){
    callback(err, 0);
  });
};
