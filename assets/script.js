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



// const city = document.getElementById("city");
// const cityList = document.getElementById("cityList");
// const today = moment().format


// Function to get and display current weather conditions for a city

function getCurrentWeather(city) {
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherAPI}`;
    
    fetch(queryURL)
    .then(function(response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        const currentCityContainer = document.getElementById("currentCityContainer");
        currentCityContainer.innerHTML = '<h2>Current Weather Conditions in ${data.name} </h2>';
        const currentDate = document.querySelector(".currentDate");
        const date = new Date();
        currentDate.innerText = date.toLocaleDateString();
        const currentIcon = document.querySelector(".currentIcon");
        currentIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
        const currentTemp = document.querySelector(".currentTemp");
        currentTemp.innerHTML = `Temperature: ${data.main.temp} &#8451;`;
        const currentHumidity = document.querySelector(".currentHumidity");
        currentHumidity.innerText = `Humidity: ${data.main.humidity} %`;
        const currentWindSpeed = document.querySelector(".currentWindSpeed");
        currentWindSpeed.innerText = `Wind Speed: ${data.wind.speed} MPH`;

    })
    .catch(function(error) {
        console.error("Error ", error);
    });
}
    
getCurrentWeather("Atlanta");

