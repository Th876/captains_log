// require express
const express = require('express');
// require body parser
const bodyParser = require('body-parser');

// set express()to a variable
const app = express();

//set a variable of port to 3000
const port = 3000;

// View engines
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine
());

// Middleware
// use and configure body-parser
// manage url encoded data in all routes (app.use)
// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({ extended: false }))

// manage json data in all routes (app.use)
// parse application/json
const jsonParser = bodyParser.json()
// app.use(bodyParser.json())

// Index : Show all the things!
// New : An empty form for a new thing
app.get('/new', (req, res) => {
        res.render('New');
});
// Delete : Get rid of this particular thing!
// Update : Update this specific thing with this updated form

// Create : Make a new thing with this filled out form
// was app.post('/create',
app.post('/logs', urlencodedParser, function (req, res) {
    // res.send('received');
    console.log(req.body);
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken === true;
    } else {
        req.body.shipIsBroken === false;
    }

    res.send(req.body);

});


// Edit : A prefilled form to update a specific thing
// Show : Show me this one thing!

// Server listening
app.listen(port, () => {
    console.log(`listening on port, ${port}`);
});