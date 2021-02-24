var express = require('express');
// var hbs = require ('express-handlebars');

var app = express();

// app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render("index");
});

app.get('/about', function(req, res){
  res.send("Hallo about");
});

app.get('/login', function(req, res){
  res.send("Hallo login");
});

app.get("*", function(req, res) {
  res.render("error")
});


app.listen(3000, function(){
})
