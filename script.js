

let city = 'quito'
const search = document.querySelector('#search-button');
let name 
let country
let temp
let description
let feels
let humidity
let cityName = document.getElementById('city');
let temperature = document.getElementById('temp');
let sky = document.getElementById('sky');
let feelsDisplay = document.getElementById('feels');
let humidityDisplay = document.getElementById('humidity');

let displayweather = function(){
    cityName.innerText = name + " " + country;
    sky.innerText = description;
    temperature.innerText = "Temp: " + temp + "°C";
    feelsDisplay.innerText = "Feels like: " + feels+ "°C";
    humidityDisplay.innerText = "Humidity: " + humidity;


}


let searchFunction = function(){
     city = document.querySelector('#search').value;
    if (city == "") {
      city = "quito"
    }
    fetchFunction()
};


let fetchFunction = function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&units=metric&APPID=e0682bf2ccc3feec865b8e5c565a3996', {mode: 'cors'})
.then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);

    name = response.name;
    console.log('name = ' + name);
    country = response.sys.country;
    console.log('country = ' + country);

    temp = Math.round(response.main.temp);
    console.log(temp);
    description = response.weather[0].description;
    console.log(description);
    feels = Math.round(response.main.feels_like);
    console.log(feels );
    humidity = response.main.humidity;
    console.log( humidity);
    displayweather();
  })
  .catch(function (err){
    console.log("you have entered a search term that fetch no city, try again", err);
  });
};

fetchFunction()
search.addEventListener("click", searchFunction);
