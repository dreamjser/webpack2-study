const express = require('express');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieParser());
// 路由
app.use('/', indexRouter);

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
