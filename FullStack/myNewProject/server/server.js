const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/person.routes')(app); //We are importing the routes export    
app.listen(8000, () => {
    console.log("Listening on port: 8000") 
});
