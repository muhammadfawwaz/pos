var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var cashierRouter = require('./routes/cashier');
var logRouter = require('./routes/log');
var settingRouter = require('./routes/setting');
var transactionRouter = require('./routes/transaction');
var loginmobileRouter = require('./routes/loginmobile');

var mid = require('./controller/middleware')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: process.env.SESSION_SECRET, cookie: { maxAge: 60000 * 60 * 24 }}))

app.use('/', indexRouter);
app.use('/users', mid.checkToken, usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/cashier', cashierRouter);
app.use('/log', logRouter);
app.use('/setting', settingRouter);
app.use('/transaction', transactionRouter);
app.use('/loginm', loginmobileRouter);

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

module.exports = app;
