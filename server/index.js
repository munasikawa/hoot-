const express = require('express'); // How we bring in a library that we've installed

const app = express(); // We make An express application

app.get('/', (req, res) => { // Hey server, when you get a GET request on the slash route, run this function (request, response)
    res.json({ // anytime a client makes a get request on the / route, we respond with some JSON
        message: 'Hooters! Yeah HueHue'
    });
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});