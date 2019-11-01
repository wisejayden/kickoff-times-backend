var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var getSeasonBySport = require("./routes/getSeasonBySport");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var doSomethingElse = require('./routes/doSomethingElse');
var axios = require("axios");

var app = express();
const apiKey = 1;
const api = `https://www.thesportsdb.com/api/v1/json/${apiKey}`;
app.set("api", api);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/get-season-by-sport/:sport", getSeasonBySport);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/api/get-something-else", doSomethingElse);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
