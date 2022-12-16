const request = require("request");
const weatherNow = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f1e30ad72c586f05b05242e156a7ebe3&query=" +
    lat +
    "," +
    long +
    "&units=f";
  request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.location);
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (response.body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        weatherDescription: response.body.current.weather_descriptions[0],
        currentTemp: response.body.current.temperature,
        feelsLike: response.body.current.feelslike,
        location: response.body.location,
      });
    }
  });
};

module.exports = weatherNow;
