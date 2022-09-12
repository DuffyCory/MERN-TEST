const PersonController = require('../controllers/person.controller');  //Import the code from person.controller.js
module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
}

