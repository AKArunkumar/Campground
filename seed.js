//packages
var mongoose = require('mongoose'),
    user = require('./models/user'),
    comments = require('./models/comments');


//dummy data 
var data = [{
        username: "Arunkumar",
        imagename: "Deer",
        imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7URRcNaVHlzyLw_kgZaNHmHw1pOyMGTG-8iI1CZof4YocXIL",
        description: "The beautifull deer"
    },
    {
        username: "Sudeep",
        imagename: "Water falls",
        imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwqR1Z5yh5jTrP2lpks3FXcX-eF7PvScm6fIBXwACf1kDcLGSSw",
        description: "The nature water flow"
    },
    {
        username: "yashawant",
        imagename: "autumn",
        imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNjTxQouGmveU1Gjbu86SnmREOVn4BQvR93NW7huvYFqypGIrzA",
        description: "This autumn feel"
    },
    {
        username: "rakesha",
        imagename: "castle",
        imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF894mcQN0QIDObDfYKmLZrHWXYeTlZY4RoRslw--xyjVG99q3",
        description: "This is beautifull castle "
    }

];

//dummy data to comments

//function for seed data
function seedDB() {

    user.remove({})
        .then(function (result) {
            console.log('users are deleted');
            //forEach element of data 
            data.forEach(function (userdata) {
                user.create(userdata)
                    .then(function (retUser) {
                        console.log("user data is added");
                        comments.create({
                            comments:"This is nice blah blah",
                            auther:"Unknow"   
                        })
                        .then(function(comment){
                            console.log("commet is added");
                        })
                        .catch(function(err){
                            console.error(err);
                        })
                    })
                    .catch(function (err) {
                        console.error(err);
                    })
            })
        })
        .catch(function (err) {
            console.error(err);
        });

}

//funtion export
module.exports = seedDB;