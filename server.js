var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

// app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render("formulier");
});

app.post('/resultaten', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render("resultaten");
});

app.get('/profieleen', function(req, res){
  res.render('profieleen');
});

app.get('/profieltwee', function(req, res){
  res.render('profieltwee');
});

app.get('/profieldrie', function(req, res){
  res.render('profieldrie');
});

app.get('/profielvier', function(req, res){
  res.render('profielvier');
});


app.get("*", function(req, res) {
  res.render("error")
});

app.listen(3000, function(){
})
