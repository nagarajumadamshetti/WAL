const express = require('express');
// const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();// initialize an app
// const routes = require('./routes');

// app.use(bodyParser.json()); // parse json     



//app.use('/', routes)

app.get('/',(req,res)=>
{
    res.send('<h1>Hello world</h1>');
})
const port = process.env.PORT||8081;
app.listen(port, () => {
        console.log(`Server started on port ${port}` );
})

app.use((error, req, res, next) => {
    res.json({
        success: false,
        error,
    })
});