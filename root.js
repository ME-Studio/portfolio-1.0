var bodyParser       = require("body-parser"),
	express          = require("express"),
	app              = express();
	

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("homepage");
});























app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Portfolio server as being hosted");
});