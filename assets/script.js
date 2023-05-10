/** GIVEN a weather dashboard with form inputs
 * WHEN I search for a city
 * THEN I am presented with current and future conditions for that city and that city is added to the search history 
 * WHEN I view current weather conditions for that city 
 * THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
 * WHEN I view future weather conditions for that city 
 * THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
 * WHEN I click on a city in the search history 
 * THEN I am again presented with current and future conditions for that city 
 */


// Open Weather API Key and Global Variables
const openWeatherAPI = "1ab5f2f9b804a41b09f07af563b6fb1b";
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openWeatherAPI;

var city = "";
var cityList = [];


// Function to get and display current weather conditions for a city

async function getWeather(city) {
    const openWeatherAPI = "1ab5f2f9b804a41b09f07af563b6fb1b";
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openWeatherAPI;

    try {
        const response = await fetch(queryURL);
        const data = await response.json();


        // display current weather conditions in the DOM 
        const currentCityContainer = document.getElementById("currentCityContainer");
        const currentCity = document.querySelector("#currentCity");
        const currentDate = document.querySelector("#currentDate");
        const currentIcon = document.querySelector("#currentIcon");
        const currentTemp = document.querySelector("#currentTemp");
        const currentHumidity = document.querySelector("#currentHumidity");
        const currentWindSpeed = document.querySelector("#currentWindSpeed");
        const currentUVIndex = document.querySelector("#currentuvIndex");


        currentCityContainer.innerHTML = "`<h2>Current Weather Conditions in ${data.name}</h2>`";
        currentCity.innerHTML = `${data.name}`;
        currentDate.innerHTML = new Date().toLocaleDateString();
        currentIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
        currentTemp.innerHTML = `Temperature: ${data.main.temp}`;
        currentHumidity.innerHTML = `Humidity: ${data.main.humidity} %`;
        currentWindSpeed.innerHTML = `Wind Speed: ${data.wind.speed} MPH`;
        currentUVIndex.innerHTML = `UV Index: ${data.main.uvi}`;

    } catch (error) {
        console.error("Error ", error);
    }
}

getWeather("Atlanta");
