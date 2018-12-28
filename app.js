var express= require('express');
var bodyParser= require('body-parser');
var port= process.env.PORT || 8080;
var app = express();
var calController=require('./controllers/calenderControl.js');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set ('view engine','ejs');


// leaving the static part right now

calController(app);//firing controller

app.listen(port);//listening
console.log("you are  listening to port 8080");
