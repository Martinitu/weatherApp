

let city = 'quito'
const search = document.querySelector('#search-button');
let name 
let country
let temp
let description
let mainDescription
let feels
let humidity
let body = document.querySelector(".body")
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
    console.log(mainDescription)
    if (mainDescription == "Clear"){
        body.removeAttribute("class")
        body.classList.add("bodyClear")
    } else if (mainDescription == "Rain"){
        body.removeAttribute("class")
        body.classList.add("bodyRain")
    }else if (mainDescription == "Thunderstorm"){
        body.removeAttribute("class")
        body.classList.add("Thunderstorm")
    }else if (mainDescription == "Clouds"){
        body.removeAttribute("class")
        body.classList.add("Clouds")
    }else if (mainDescription == "Snow"){
        body.removeAttribute("class")
        body.classList.add("Snow")
    }



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
    
    country = response.sys.country;
   

    temp = Math.round(response.main.temp);
    
    description = response.weather[0].description;
    mainDescription = response.weather[0].main;
   
    feels = Math.round(response.main.feels_like);

    humidity = response.main.humidity;
  
    displayweather();
  })
  .catch(function (err){
    console.log("you have entered a search term that fetch no city, try again", err);
  });
};

fetchFunction()
search.addEventListener("click", searchFunction);
