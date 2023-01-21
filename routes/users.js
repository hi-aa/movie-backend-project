var express = require('express');
var router = express.Router();

const testArray = [
  {id: 1, title: 'title1', contents: 'conte1'},
  {id: 2, title: 'title2', contents: 'conte2'},
  {id: 3, title: 'title3', contents: 'conte3'},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    data: testArray
    , message: "return message check!"
  })
});

module.exports = router;
