const mongoose = require('mongoose');

//creates blueprint for db object
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name is required"],
        minlength: [6, "First name must be at least 6 characters long"]
    },

    last_name: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [6, "Last name must be at least 6 characters long"]
    },

    age: {
        type: Number,
        min: [1, "You must be at leasrt 1 years old to register"],
        max: [150, "You can't be over 150 years old to register"]
    }, 
    email:{ type: String, required: [true, "email required"] }
    
    },
    {timestamps: true}
    );

//creates nexessary db
const User = mongoose.model('User', UserSchema);

module.exports = User;
