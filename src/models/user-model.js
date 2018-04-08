const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    googleId: String
});

//mongodb will pluralize this for us - users collection
const User = mongoose.model('user', userSchema);

module.exports = User;