
var mongoose    = require('mongoose'),
    comments    = require('./comments');

var  userSchema = new mongoose.Schema({
        username : String,
        imagename: String,
        imagelink: String,
        description: String,
        comments : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref : 'comments'    
            }
        ]
});

module.exports = mongoose.model('user', userSchema);