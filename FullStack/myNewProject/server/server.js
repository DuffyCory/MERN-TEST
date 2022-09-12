const express = require('express');
const app = express();
require('./routes/person.routes')(app); //We are importing the routes export
const port = 8000;
    
app.listen(8000, () => console.log(`Listening on port: ${port}`) );
