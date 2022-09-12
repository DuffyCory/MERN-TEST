const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
require('./routes/person.routes')(app); //We are importing the routes export
const port = 8000;
    
app.listen(8000, () => console.log(`Listening on port: ${port}`) );
