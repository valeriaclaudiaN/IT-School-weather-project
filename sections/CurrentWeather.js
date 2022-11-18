function displayCurrentWeather(city) {
  fetch(getCurrentWeatherEndpoint(city))
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      const { name, dt, main, weather, wind } = data;
      const day = getDayOfWeek(dt);
      const monthAndDay = getDayOfWeek(dt);
      const minutes = getHours(dt);
      const temperature = Math.round(main.temp);
      const realfeel = Math.round(main.feels_like);
      const weatherDescription = weather[0].description;
      const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = Math.round(windToKmPerHour(wind.speed));
      const currentWeatherContainer =
        document.querySelector(".current-weather");
      currentWeatherContainer.innerHTML = `
      <div class="px-3"> 
      <div class="fs-4 mb-2">${monthAndDay}, ${minutes}</div> 
      <div class="fs-4 "><strong> ${name}</strong></div> 
      <div class="d-flex align-items-center justify-content-center"> <strong class="fs-4"> ${temperature}°C </strong> <img src="${weatherIcon}" alt="Weather Icon"/></div>
      </div>
      <div class="px-3"> 
        <p class="fs-5">Real Feel:<strong> ${realfeel}°C</strong> </p>
        <p class="fs-5 text-capitalize"><strong> ${weatherDescription}</strong> </p>
        <p class="fs-5">Wind:<strong> ${windSpeed} km/h </strong> </p>
      </div>
    `;
    });
}
