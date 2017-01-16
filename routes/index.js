const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const p = req.query.p;
  const cookie = req.cookies;
  console.log(cookie);
  res.render('index');
});

module.exports = router;
