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
        const currentCity = document.querySelector("#current-city");
        const currentDate = document.querySelector("#current-date");
        const currentIcon = document.querySelector("#current-icon");
        const currentTemp = document.querySelector("#current-temp");
        const currentHumidity = document.querySelector("#current-humidity");
        const currentWindSpeed = document.querySelector("#current-wind-speed");
        const currentUVIndex = document.querySelector("#current-uv-index");

        currentCity.textContent = data.name;
        currentDate.textContent = data.dt;
        currentIcon.textContent = data.weather[0].icon;
        currentTemp.textContent = data.main.temp;
        currentHumidity.textContent = data.main.humidity;
        currentWindSpeed.textContent = data.wind.speed;
        currentUVIndex.textContent = data.main.uvi;

    } catch (error) {
        console.error("Error: ", error);
    }
}
