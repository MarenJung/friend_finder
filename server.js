// DEPENDENCIES
var express = require("express");
// PARSES MIDDLEWARE
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./app/public")));

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// ROUTES
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

app.listen(PORT, function() {
  console.log("App on PORT: " + PORT);
});