require('dotenv').config();
const express = require('express');
const app = express();// initialize an app
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // parse json

const routes = require('./routes');

app.use('/', routes);

const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`Server started on port ${port}`);

});
app.use((error, req, res, next) => {
    res.json({
        success: false,
        error,
    })
});