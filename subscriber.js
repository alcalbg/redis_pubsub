var redis = require("redis");

var client = redis.createClient({port: 6379});

client.on("message", (ch, msg) => {
  console.log(msg+"\n");
})

client.subscribe("channel_one");
