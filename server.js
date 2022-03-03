// const router = require('./routesController/routes');
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use('/send', require('./routesController/routes'))


//take any port no greater than 2000 

if (process.env.NODE_ENV == 'production') {

    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {

        res.sendFile(path.join(__dirname, 'client ', 'build', 'index.html'));
    })
} else {

    app.get('/', (req, res) => {

        res.send("server is running")
    })
}

let PORT = process.env.PORT || 2500
app.listen(PORT, (err) => {
    err ? console.log(err) : console.log('server started on port ' + PORT + '...!');
})