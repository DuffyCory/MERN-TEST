const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/petShelter", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log ("Established a connection to the DB"))
    .catch((err) => console.log("Something went wrong with the connection to the DB", err));