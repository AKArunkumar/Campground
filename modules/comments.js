var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    comment : String,
    user    : String
})

module.exports  = mongoose.model('comments', commentSchema);