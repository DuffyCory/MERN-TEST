const mongoose = require('mongoose');
//This will create a database named "person" if one doesn't already exist (no need for mongo shell!):
const dbName = "products";

mongoose.connect(`mongodb://localhost/${dbName}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to ${dbName}`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

