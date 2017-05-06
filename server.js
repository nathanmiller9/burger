var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.post('/:id', function(req, res ) {
	console.log(req.param)
	console.log(req.params.id)
})

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});

// moment().format('MMMM Do YYYY, h:mm:ss a');