// console.log("Starting");

// setTimeout(() => {
//   console.log("2 sec timer");
// }, 2000);
// setTimeout(() => {
//   console.log("0 sec timer");
// }, 0);
// console.log("Stopping");

// const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=f1e30ad72c586f05b05242e156a7ebe3&query=37.8267,-122.4233&units=f";
// request({ url: url, json: true }, (error, response) => {
//   //   console.log(response.body.current);
//   if (error) {
//     console.log("Unable to connect to weather service.");
//   } else if (response.body.error) {
//     console.log("Unable to find location.");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });
const weatherNow = require("./utils/weatherNow.js");
weatherNow(
  22.58,
  87.78,
  (error, { weatherDescription, currentTemp, feelsLike,location } = {}) => {
    console.log("Error:-", error);
    console.log("Data:-", { weatherDescription, currentTemp, feelsLike,location });
    console.log(
      "Current Weather:" +
        weatherDescription +
        "; Current Temprature:" +
        currentTemp +
        "; Feels Like:" +
        feelsLike
    );
  }
);
