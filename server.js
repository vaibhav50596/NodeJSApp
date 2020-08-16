//express is a webframework used for building REST APIs
const express = require('express');

//body-parser is used to parse requests of content-types
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//configuring the database
const dbConfig = require('./config/database.config');

//importing mongoose - object document mapping tool for NodeJS and MongoDB, 
//converts objects to documents and viceversa
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log("Successfully connected to the database");
}).catch( err => {
    console.log("could not connect to the DB...", err);
    process.exit();
});

//defining a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to NodeJS application."});
});

//importing routes
require('./app/routes/note.routes')(app);

//listen for requests
app.listen(3000, ()=> {
    console.log("Server is listening on port 3000");
})