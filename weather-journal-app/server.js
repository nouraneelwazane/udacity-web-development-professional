// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;
const server = app.listen(port, listening);
function listening(){
    console.log(`server running on localhost:${port}`);
}

//GET Route
app.get('/all', getWeather);
function getWeather(request, response) {
  response.send(projectData);
}

//POST Route
app.post('/addWeather', addWeather);
function addWeather(request,response){
    projectData.temperature = request.body.temperature;
    projectData.date = request.body.date;
    projectData.feels = request.body.feels;
    response.send(projectData);
}