const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
require("dotenv").config();

//Inicializaciones
const app = express();

//Settings - HBS
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname + "/views"));
app.engine(
	".hbs",
	exphbs.engine({
		defaultLayout: "main",
		layoutsDir: path.join(app.get("views"), "layouts"),
		partialsDir: path.join(app.get("views"), "partials"),
		extname: ".hbs",
	}),
);
app.set("view engine", "hbs");

//Middlewares
app.use(express.static("public"));

//Routes
app.use(require("./routes/index"));

// app.get("*", (req, res) => {
// 	res.sendFile(__dirname + "/public/404.html");
// });

//Server is listening
app.listen(app.get("port"), () => {
	console.log(`Port listening at`, app.get("port"));
});
