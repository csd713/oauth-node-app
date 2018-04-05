'use strict'

const express = require('express');
const app = express();

//setup view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');


app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
  console.log('Open https://localhost:3000 on your browser');
});
