const express = require('express');
const app = express();

// so we can use req.body
app.use(express.json())
// so we can access form data
app.use(express.urlencoded({ extended: true}));




app.get('/', function (req, res) {
    return res.send('Home!')
})

app.get('/dogs', function(req, res) {
    return res.send("Insert dogs here")
})

app.get('/cats', (req, res) => {
    return res.send("This is the GET request for /cats")
})
app.post('/cats', function addCat (req, res) {
    return res.send("Added a new cat, jk, this is a test")
})


app.get('/greet/:lang', function (req, res) {
    let greet = req.params.lang
    let greeting = greetings[greet]
    if (!greeting) return res.send("Invalid Language")
    return res.send(greeting)
})

app.get('/search', function (req, res) {
    const {animal = 'cat', count = '9' } = req.query;
    return res.send(`You searched: Animal = ${animal}, Count = ${count}`)
})

// added app.use above - check this w/ insomnia
app.post('/register', function (req, res) {
    res.send(`Welcome, ${req.body.username}`)
})

app.get('/show-language', (req, res) => {
    let lang = req.headers['accept-language']
    return res.send(`Your language preference is set to: ${lang}`)
})

// should always be at the bottom of a file
app.listen(3000, function() {
    console.log('App on port 3000');
})

const greetings = {
    en: "hello",
    fr: "bonjour",
    sp: "hola",
    ic: "hallo",
}