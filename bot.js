console.log("bot start");

var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);

// get(), post(), stream()

var stream = T.stream('user');
stream.on('follow', followed);

function followed(event){
  console.log(event);
  var name = event.source.name;
  var screenName = event.source.screen_name;
  tweetIt(".@" + screenName + " thank you for the follow! Bot is pleased.")
}


function tweetIt(txt){
  var r = Math.floor(Math.random()*100);
  var tweet = {
    status: txt
  }

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response){
      if (err){
        console.log("Something went wrong!");
        console.log(data);
      } else {
      console.log("It worked");
      //console.log(data);
    }
  }
}
