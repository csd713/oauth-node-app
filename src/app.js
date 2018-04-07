'use strict'

const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//connect to mongoDb
const MONGODB_URI = keys.mongoDb.dbURI || 'mongodb://localhost/bookstore';
mongoose.connect(MONGODB_URI, () => {
  console.log('Connected to MongoDB :)');
});

//setup route for /auth/*
app.use('/auth', authRoutes);

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