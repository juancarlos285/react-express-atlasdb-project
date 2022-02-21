const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  address: {
    building : {
      type: String,
    },
    coord: [Number],
    street:  {
      type: String,
    },
    zipcode: {
      type: String,
    },
  },
  borough: {
      type: String,
    },
  cuisine: {
      type: String,
    },
  grades: [
    {
      date : {
        type: Date,
      },
      grade : {
        type: String,
      },
      score : {
        type: Number,
      },
    },
  ],
  name: {
    type: String,
  },
  restaurant_id: {
    type: String,
  },
}, {
  timestamps: {
    type: Boolean,
  },
  collection: 'restaurants'
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;



