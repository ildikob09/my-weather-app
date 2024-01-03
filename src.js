let now = new Date();
let currentDate = document.querySelector("#current-time-and-date");
let hour = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
currentDate.innerHTML = `${hour}:${minutes} ${day},`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let cityUpdate = document.querySelector("#city");

  cityUpdate.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#city-details");
searchForm.addEventListener("submit", search);

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  console.log(response);
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = `${temperature}°C`;
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let apiKey = "befe28ed9d48eac93fd074tafa91d7of";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}
