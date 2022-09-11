const Joke = require('../models/jokes.model');


const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => 
            res.json(allJokes))
        .catch((err) => console.log(error));
};

const getJokeById = (req, res) => {
    const {params} = req;
    Joke.findOne({ _id: params._id})
        .then((joke) => req.json(joke))
        .catch((err) => console.log(error));
};

const createNewJoke = (req, res) => {
    const {body} = req;
    Joke.create(body)
        .then((newJoke) => res.json(newJoke))
        .catch((error) => console.log(error));
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true,})
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => console.log(error));
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then((result) => res.json(result))
        .catch((err) => console.log(error));
};


module.exports = {
    getAllJokes,
    getJokesById,
    createNewJoke,
    updateJoke,
    deleteJoke,
};
