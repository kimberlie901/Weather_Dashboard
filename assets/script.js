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
// const city = ""

// const cityList = ""
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
        currentCityContainer.innerHTML = `<h2>Current Weather Conditions in ${data.name} </h2>`;
        const currentDate = document.querySelector(".currentDate");
        const date = new Date();
        currentDate.innerText = date.toLocaleDateString();
        const currentIcon = document.querySelector(".currentIcon");
        currentIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
        const currentTemp = document.querySelector(".currentTemp");
        currentTemp.innerHTML = `Temperature: ${data.main.temp} &#8457;`;
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



// Function to get and display 5-day forecast for a city

function getFiveDayForecast(city) {

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${openWeatherAPI}`)
    .then(response => response.json())
    .then(data => {
        // 5 day forecast array 
        const forecastData = data.list;
        let count = 0;
        for (let i = 0; i < forecastData.length; i += 8) {
            count ++;
            const forecast = forecastData[i];
            console.log(forecast);

            // get date, icon, temp, humidity, and wind speed for forecast
            const date = new Date(forecast.dt_txt).toLocaleDateString();
            const icon = forecast.weather[0].icon;
            const temp = forecast.main.temp;
            const humidity = forecast.main.humidity;
            const windSpeed = forecast.wind.speed;

            // create forecast card
            const dayContainer = document.querySelector(`.day${count}Container`);
            console.log(dayContainer)
            dayContainer.querySelector(".day").textContent = date;
            dayContainer.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">`;
            dayContainer.querySelector(".temp").textContent = `Temp: ${temp} &#8457;`;
            dayContainer.querySelector(".humidity").textContent = `Humidity: ${humidity} %`;
            dayContainer.querySelector(".windSpeed").textContent = `Wind Speed: ${windSpeed} MPH`;
        }
    })
    .catch(error => console.error(error));
}

getFiveDayForecast("Atlanta");


  