var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    user        = require('./modules/comments');
    
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

// mongoose connection
mongoose.connect('mongodb://127.0.0.1/blogdb', {
    useMongoClient: true
})

mongoose.Promise = global.Promise;


// Routes
app.get('/', function(req,res){
    res.redirect('campground');
})

app.listen( app.get('port') ,()=>{
    console.log('server started........');
});
