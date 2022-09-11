const JokeController = require('../controllers/jokes.controller');

//the order of these items matters...top to bottom
module.exports = (app) => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:id', JokeController.getJokeById);
    app.put('/api/users', JokeController.updateJoke);
    app.delete('/api/users/:id', JokeController.deleteJoke);
}
