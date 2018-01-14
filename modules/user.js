
var mongoose    = require('mongoose'),
    comments    = require('./comments');

var  userSchema = new mongoose.Schema({
        username : String,
        image    : String,
        description: String,
        comments : [
            {
                type: mongoose.Types.Schema.ObjectId,
                ref : 'comments'    
            }
        ]
});

module.exports = mongoose.model('user', userSchema);