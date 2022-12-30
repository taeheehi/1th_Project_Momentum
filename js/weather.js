const API_KEY = "6e5ce6cf8831d50b3872bccf21f87c42";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(
        `div#weather div.weather-main div:first-child`
      );
      const city = document.querySelector(
        `div#weather div.weather-main div:last-child`
      );
      const temp = document.querySelector(
        `div#weather div.weather-temp div:first-child`
      );
      const humidity = document.querySelector(
        `div#weather div.weather-temp div:last-child`
      );

      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const city2 = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
