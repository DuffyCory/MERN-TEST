const Pet = require("../models/pets.model");



const createNewPet = (req, res) => {
    Pet.create(req.body)
    .then((newPet) => {
        res.json({newPet});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const getAllPets = (req, res) => {
    Pet.find()
    .then((allPets) => {
        res.json({allPets});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}

const getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then((onePet) => {
        res.json({onePet});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}


module.exports = { createNewPet, getAllPets, getOnePet };