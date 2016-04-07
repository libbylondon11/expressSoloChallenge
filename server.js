var final=require('./modules/account.js');

var express=require('express');//node
var app=express();

var account = require('./modules/account.js');
// var random=require('.modules/random');
// var usd=require('./modules/usd');
var port=3000;


app.get('/', function(req, res, next) {
  res.sendFile(__dirname + "/public/index.html");

});

app.use(express.static("public")); 

app.get("/balance", function(req, res, next) {
  console.log(final.balance());
  console.log(final.account());
  res.send(final.account());
});
app.listen(port, function() {
  console.log("it works!", port);
});
