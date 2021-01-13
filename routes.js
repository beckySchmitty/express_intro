const express = require('express');

const app = express();

app.get('/', function (req, res) {
    return res.send('Home!')
})

app.get('/dogs', function(req, res) {
    return res.send(`response = ${res}`)
})

app.get('/cats', (req, res) => {
    return res.send("GET request for cats")
})
app.post('/cats', function addCat (req, res) {
    return res.send("Added a new cat, jk, this is a test")
})


// should always be at the bottom of a file
app.listen(3000, function() {
    console.log('App on port 3000');
})