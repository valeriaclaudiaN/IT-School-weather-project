const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const currentCity = document.getElementById("current-city");

const updateCity = (city) => {
  currentCity.innerHTML = city;
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
