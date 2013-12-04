var level = require('level'),
    sub = require('level-sublevel'),
    db = sub(level(process.argv[2]));

var dinosaurs = db.sublevel('dinosaurs');

dinosaurs.put('slogan', 'rawr');

var robots = db.sublevel('robots');

robots.put('slogan', 'beep boop');

