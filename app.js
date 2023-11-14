var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var server=require('http')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var os = require('./routes/os');
var products=require("./routes/products");
var voiture=require("./routes/voitures");
var student=require("./routes/students");
var client=require("./routes/clients");

//mongo
var mongo=require("mongoose");
var mongoconnection=require("./config/dbcollections.json");
const { error } = require('console');


mongo.connect(mongoconnection.url,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(() => console.log('mongo connecter')).catch((err) => console.log(err));


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/os', os);
app.use('/products', products);
app.use('/voitures', voiture);
app.use('/students', student);
app.use('/clients', client);


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
  res.render('error');
});

const serveur = server.createServer(app);
serveur.listen(3000 , console.log("server run"));
module.exports = app;
