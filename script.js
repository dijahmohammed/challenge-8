// Replace 'your_city_name' and 'your_api_key' with the actual city name and your OpenWeather API key
var apiKey = "809e38a3e1edc2bb5badd0f4abec407a";
$(document).ready(function() {
    var APIkey = "809e38a3e1edc2bb5badd0f4abec407a";
    var todayCard = $('#today');
    var fiveDayForecast = $('#forecast');
  
    $('#search-form').on('submit', function(event) {
      event.preventDefault();
      var searchInput = $('#search-input').val();
      getWeather(searchInput);
    });
  
    function getWeather(searchInput) {
      var geoQueryURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&limit=5&appid=" + APIkey;
      $.ajax({
        url: geoQueryURL,
        method: "GET"
      }).then(function(response) {
        var lon = response[0].lon.toFixed(2);
        var lat = response[0].lat.toFixed(2);
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          displayWeather(response);
        });
      });
    }
  
    function displayWeather(response) {
      todayCard.empty();
      fiveDayForecast.empty();
  
      var cityName = response.name;
      var date = dayjs().format('MMMM DD, YYYY');
      var iconCode = response.weather[0].icon;
      var temperature = (response.main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius
      var windSpeed = response.wind.speed;
      var humidity = response.main.humidity;
  
      var todayDiv = $('<div>').attr('class', 'card today-card p-4');
      var cityNameAndDate = $('<h2>').text(cityName + " (" + date + ")");
      var todayIcon = $('<img>').attr({
        src: "https://openweathermap.org/img/w/" + iconCode + ".png",
        height: "50px",
        width: "50px"
      });
      var todaysTemp = $('<p>').text("Temperature: " + temperature + " °C");
      var todayWind = $('<p>').text("Wind Speed: " + windSpeed + " m/s");
      var todayHumidity = $('<p>').text("Humidity: " + humidity + "%");
  
      todayCard.append(todayDiv);
      todayDiv.append(cityNameAndDate, todayIcon, todaysTemp, todayWind, todayHumidity);
    }
  });
  
  
      // Display five-day forecast
      // (code for displaying the five-day forecast omitted for brevity)
    
    
        // Display five-day forecast
        // (code for displaying the five-day forecast omitted for brevity)
    
    
  
      // Display today's weather
      // (code omitted for brevity)
  
      // Display five-day forecast
      // (code omitted for brevity)
    
  


// function fetchWeather() {


// // Construct the URL for the Geocoding API
// var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

// // Make a fetch request to the Geocoding API
// fetch(queryURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         var latitude = data[0].lat;
//         var longitude = data[0].lon;
//         console.log(latitude,longitude);
//       getWeather(latitude,longitude);

//       $('#search-button').on('click', function (event) {
// event.preventDefault()
// cityInput= $('#search-iinput').val();

//       })


// fetchWeather();

// function getWeather(lat,lon){
// console.log(lat,lon);
// var apiKey = "809e38a3e1edc2bb5badd0f4abec407a";

// // Construct the URL for the Geocoding API
// var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// // Make a fetch request to the Geocoding API
// fetch(queryURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });
// }