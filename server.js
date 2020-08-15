//Express is a webframework used for building REST APIs
const express = require('express');
//body-parser is used to parse requests of content-types
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//defining a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to NodeJS application."});
});

//listen for requests
app.listen(3000, ()=> {
    console.log("Server is listening on port 3000");
})