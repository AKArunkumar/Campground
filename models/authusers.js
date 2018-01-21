
var mongoose = require('mongoose'),
    passportlocalmongoose = require('passport-local-mongoose');

var authuserSchema = new mongoose.Schema({
    username: String,
    password : String
})

authuserSchema.plugin(passportlocalmongoose);

module.exports = mongoose.model('authusers', authuserSchema);