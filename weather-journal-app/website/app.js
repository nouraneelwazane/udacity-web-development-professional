/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip=';
const APIkey = '&appid=d5eb738432b431d08ee3d9ea3b637860';
let zipCode = '';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// event listener for the element with the id=generate with callback function performAction to execute when it is clicked
document.getElementById('generate').addEventListener('click', performAction);

// callback function for the event listener for the element with id=generate
function performAction(e) {
    zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    if (zipCode != '') {
        getData(baseURL, zipCode, APIkey)
            .then(function (data) {
                postData('/addWeather', { temperature: data.main.temp, feels: feelings, date: newDate })
            })
            .then(function () {
                updateUI();
            }
            )
    }
}

// make a GET request to the OpenWeatherMap API
const getData = async (baseURL, zipCode, APIkey) => {
    const response = await fetch(baseURL + zipCode + APIkey)
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

// make a POST request to server.js
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}

// update UI with user input & API weather
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('content').innerHTML = allData.feels;
    } catch (error) {
        console.log('error', error);
    }
}