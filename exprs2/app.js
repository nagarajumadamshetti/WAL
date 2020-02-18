const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routes');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', indexRouter);

app.use(bodyParser.json());
//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.json({
    success: false,
    err

  });
});
app.listen(PORT, () => {
  console.log(`server Started at ${PORT}`);
});
module.exports = app;
