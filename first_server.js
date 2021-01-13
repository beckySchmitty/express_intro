const express = require('express');

const app = express();

// should always be at the bottom of a file
app.listen(3000, function() {
    console.log('App on port 3000');
})

