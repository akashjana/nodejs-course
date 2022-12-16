console.log("Client side js is loaded!");

const weatherForm = document.querySelector("form");
const lat = document.getElementById("lat");
const long = document.getElementById("long");
const msg1 = document.getElementById("msg-1");
const msg2 = document.querySelector("#msg-2");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  msg1.textContent = "Loading....";
  msg2.textContent = "";
  fetch(
    "http://localhost:3000/weather?lat=" + lat.value + "&long=" + long.value
  ).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        msg1.textContent = data.error;
        // console.log(data.error);
      } else {
        msg1.textContent = data.location.name;
        msg2.textContent = data.forecast;
        // console.log(data.location.name);
        // console.log(data.forecast);
      }
    });
  });
});
