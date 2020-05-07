var express = require("express");
var app = express();
app.set("view engine", "ejs");

// root route
app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

//===================================================================
// listen to the server -  http://localhost:3000
//===================================================================
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("simple test server has started!");
});