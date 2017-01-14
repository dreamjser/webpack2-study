const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/test(/:text)?', function(req, res) {
  const text = req.params.text || 0;
  const cookies = req.cookies;

  res.cookie('name', 'tobi', {
    path: '/',
    expires: new Date(Date.now() + 900000),
    httpOnly: true
  });

  res.send([{
    text: text
  }]);
});

app.get('/', function(req, res) {
  console.log(req);
  res.render('index');
});

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
