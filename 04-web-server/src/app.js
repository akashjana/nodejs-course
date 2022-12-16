const path = require("path");
const express = require("express");
const hbs = require("hbs");
const weatherNow = require("./utils/weatherNow.js");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();

//define paths for express config
const publicDirectory = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebar engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "AJ",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "AJ",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "AJ",
    helperText: "This is some help text.",
  });
});
// app.get("", (req, res) => {
//   res.send("<h1>Home Page!</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "Aj",
//     age: 24,
//   });
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Page!</h1>");
// });

app.get("/weather", (req, res) => {
  if (!req.query.lat || !req.query.long) {
    return res.send({
      error:
        "Latitude and Longitude must be provided",
    });
  }
  weatherNow(
    req.query.lat,
    req.query.long,
    (error, { weatherDescription, currentTemp, feelsLike, location } = {}) => {
      if(error){
        return res.send({
          error
        })
      }
      res.send({
        forecast: weatherDescription,
        currentTemprature: currentTemp,
        feelsLike,
        location,
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "Must provide search query",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help-404",
    name: "AJ",
    errorMsg: "Help article not found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "AJ",
    errorMsg: "Page not found.",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
