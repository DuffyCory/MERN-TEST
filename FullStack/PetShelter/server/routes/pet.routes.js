const petController = require("../controllers/pet.controller");

module.exports = (app) => {
    app.post('/pet', petController.createNewPet);
    app.get('/pet', petController.getAllPets);
    app.get('/pet/:id', petController.getOnePet);

    };