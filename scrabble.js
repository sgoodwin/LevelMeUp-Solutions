module.exports.init = function (db, words, callback) {
  words.forEach(function(word){
    var key = String(word.length)+":"+word;
    db.put(key, word);
  });

  callback(null);
};

module.exports.query = function (db, word, callback) {
  var wordLength = word.length,
      words = [],
      match = word.replace(/\*/g, ''),
      options = { start: wordLength+":"+match, end: wordLength+":"+match+"_" };

  db.createReadStream(options).on('data', function(data){
    var word = data.value;

    if(word.substring(0, match.length) === match){
      words.push(word);
    }
  }).on('end', function(){
    callback(null, words);
  }).on('error', function(err){
    callback(err, words);
  });
};
