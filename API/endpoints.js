const APPID = "b5373460fb0f9835004cc71aa5e1991a";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APPID}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APPID}`;
}
