const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");

function updateCityDisplay(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = city + ".";
}

const updateCity = (city) => {
  updateCityDisplay(city);
  localStorage.setItem("city", city);
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
