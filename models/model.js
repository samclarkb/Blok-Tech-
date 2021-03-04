var mongoose = require('mongoose');

var schema = mongoose.Schema
mongoose.set('useCreateIndex', true)

var clusterSchema = new schema({
  geslacht: {
    type: String,
    required: [true, 'geslacht is requierd'],
  },
  leeftijd: {
    type: Number,
    required: [true, 'geslacht is requierd'],
  },
  lengte: {
    type: String,
    required: [true, 'geslacht is requierd'],
  },
  afstand: {
    type: Number,
    required: [true, 'geslacht is requierd'],
  },
  persoonlijkheid: {
    type: String,
    required: [true, 'geslacht is requierd'],
  },
})

export default mongoose.model('users', clusterSchema)
