'use strict';

const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', { title: 'webpack2-学习'}) );

app.listen(8000);
console.log('start');
