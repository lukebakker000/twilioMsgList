
var accountSid = '************************';
var authToken = "*********************";
var client = require('twilio')(accountSid, authToken);

var msgSent = 0,
  contentList = [
    'a',
    'b',
    'c',
    'd'
  ];

var postMan = setInterval(function () {

  if (msgSent == contentList.length) {
    clearInterval(postMan);
    console.log(theEnd);
  }

  msgSent += 1;
  console.log(msgSent + " SMS sent");

  client.sms.messages.create({
    body: contentList[msgSent - 1],
    to: "+614*********",
    from: "+12*********"

  }, function(err, message) {
    if(err) {
      console.log("Did not send message. There has been an error.")
    }
    process.stdout.write(message.sid + '\n');
  });

}, 3000);

var theEnd = "\nMessaging timer has timed out.\n";


