const express = require('express');
const cors = require('cors');
const app = express();

////cors allows different ports to send requests to our api
app.use(cors({
    origin: "http://localhost:3000",
}),
);

//middleware- allows us to read json objects sent in the clients request
app.use(express.json());
//middleware-allows us to read json objects with strings and arrays in the clients request
app.use(express.urlencoded({ extended: true }));


require('./config/mongoose.config');
require('./routes/product.routes')(app); //We are importing the routes export    


app.listen(8000, () => {
    console.log("Listening on port: 8000") 
});
