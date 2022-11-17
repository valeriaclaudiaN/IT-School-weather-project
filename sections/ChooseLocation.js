const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const currentCity = document.getElementById("current-city");

const updateCity = (city) => {
  // update the info
  currentCity.innerHTML = city;
  // update the data from the API (current weather section)
  displayCurrentWeather(city);
};

bucharest.addEventListener("click", function () {
  updateCity("Bucharest");
});

timisoara.addEventListener("click", function () {
  updateCity("Timisoara");
});

oradea.addEventListener("click", function () {
  updateCity("Oradea");
});
