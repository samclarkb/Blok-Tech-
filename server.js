var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var model = require('./models/model')
var app = express();
require('dotenv').config();

var urlencodedParser = bodyParser.urlencoded({extended: true });

mongoose.connect("mongodb+srv://SamBoot:samboot1@cluster0.sw6cb.mongodb.net/Project-Tech")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

var notesSchema = {
  geslacht: String,
  leeftijd: Number,
  lengte: String,
  afstand: Number,
  persoonlijkheid: Array
}

var Note = mongoose.model("Note", notesSchema)

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render("formulier");
});

app.post('/resultaten', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render("resultaten");
});

app.post('/', function(req, res){
  if(req.body) {
    createNewUser(req.body)
  }
})

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

async function getData(){
  var data = await model.find({}).lean();
  console.log(data)
}

function createNewUser(user){
  var foo = new model({
    geslacht: 'babs',
    leeftijd: 18,
    lengte: 'gemiddeld',
    afstand: 5,
    persoonlijkheid: ['vriendelijk', 'sportief']
  })
}

// foo.save(error, function {
//   if(error) {
//     console.log('someting went wrong');
//   }
//   else {
//     console.log('someting went right');
//   }
// })
