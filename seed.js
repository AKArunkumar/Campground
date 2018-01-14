//packages
var mongoose = require('mongoose'),
    user     = require('./modules/user');

//function for seed data
function seedDB(){

    user.remove({}, function(err, result){
        
    })

}

//funtion export
module.exports  = seedDB;