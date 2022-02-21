const router = require('express').Router();
let Restaurants = require('../models/restaurants.model');

router.route('/1').get((req, res) => {
    Restaurants.find().limit(10)
      .then(restaurants => {
        res.json(restaurants)
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;