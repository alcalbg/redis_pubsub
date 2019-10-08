var redis = require("redis");
var client = redis.createClient({port: 6379});

var i = 0;
setInterval(function() {
  i++;
  client.publish("channel_one", "I am sending a message #"+i);
}, 1000);
