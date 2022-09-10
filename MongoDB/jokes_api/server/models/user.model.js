const mongoose = require('mongoose');

//creates blueprint for db object
const UserSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
}, {timestamps: true});

//creates nexessary db
const User = mongoose.model('User', UserSchema);

module.exports = User;
