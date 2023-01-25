var express = require('express');
var router = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

/** GET listing. */
router.get('/', function(req, res, next) {
  const testArray = [
    {id: 1, title: 'title1', contents: 'conte1'},
    {id: 2, title: 'title2', contents: 'conte2'},
    {id: 3, title: 'title3', contents: 'conte3'},
  ];

  res.status(200).toArray(testArray);
});

/** Read Route */
router.get('/mongo', async function(req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("listingsAndReviews")
    .find({}).limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

module.exports = router;
