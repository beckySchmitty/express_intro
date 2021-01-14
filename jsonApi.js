const express = require('express');
const app = express();

app.use(express.json())

const ICECREAM = [
    {name: 'chocolate lover', qty: 2, price: 4.00},
    {name: 'peanut butter', qty: 3, price: 6.00}
]

app.get('/flavors', (req, res) => {
    res.json(ICECREAM)
})

app.post('/flavors', (req, res) => {
    if (req.body.name.toLowerCase() === 'vanilla') {
        res.status(403).json({msg: "Boring flavor, pick again!"})
    }
    ICECREAM.push(req.body)
    res.status(201).json(ICECREAM)
})


app.listen(3000, function() {
    console.log('App on port 3000');
})
