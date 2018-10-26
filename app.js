var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var apiRouter = require('./routes/book');
var apiMsgRouter = require('./routes/sentmessages');
var apiGameStats = require('./routes/gamestats');
//var apiProfile = require('./routes/profile.js');
var apiRcvdRouter = require('./routes/receivedmessages');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/api', apiRouter);
app.use('/api2', apiMsgRouter);
app.use('/api3', apiRcvdRouter);
app.use('/api4', apiGameStats);
//app.use('/api5', apiProfile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

require('./models/db');

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mean-angular6', { promiseLibrary: require('bluebird'), useNewUrlParser: true })
//   .then(() =>  console.log('connection successful'))
//   .catch((err) => console.error(err));

module.exports = app;