const mongoose = require('mongoose');

//creates blueprint for db object
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
},
    {timestamps: true}
    );

//creates nexessary db
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
