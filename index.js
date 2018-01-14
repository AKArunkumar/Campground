var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    mongoose    = require('mongoose');
    
var app = express();

//intilize pot
app.set('port', 8080);

// Serving static file
app.use(express.static('public'));

// use viewengine to views
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Routes
app.get('/', function(req,res){
    res.send("Hi");
})

app.listen( app.get('port') ,()=>{
    console.log('server started........');
});
