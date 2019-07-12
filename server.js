var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("assets"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});