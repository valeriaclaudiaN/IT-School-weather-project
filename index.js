let currentCity = localStorage.getItem("city");

if (!currentCity) {
  currentCity = "Bucharest";
  localStorage.setItem("city", "Bucharest");
}
updateCityDisplay(currentCity);
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
