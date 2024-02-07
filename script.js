// Replace 'your_city_name' and 'your_api_key' with the actual city name and your OpenWeather API key
$(document).ready(function() {
var cityName = ['London', "Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham"];
var apiKey = "809e38a3e1edc2bb5badd0f4abec407a";

// Construct the URL for the Geocoding API
var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

// Make a fetch request to the Geocoding API
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Extract coordinates from the response
        for (let i = 0; index < cityName.length; i++) {
            
            
        }
        if (data.length > 0) {
            var latitude = data[0].lat;
            var longitude = data[0].lon;
            // Now you have the coordinates for the city
            console.log(`Coordinates for ${cityName}: Latitude ${latitude}, Longitude ${longitude}`);
            // Proceed with making the 5 Day Weather Forecast API call using these coordinates
        } else {
            console.error(`Coordinates not found for ${cityName}`);
        }
    })
    .catch(function (error) {
        // Handle errors
        console.error('Error:', error);
    });
})
    // script.js
