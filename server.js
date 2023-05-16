// require express
const express = require('express');
// require body parser
const bodyParser = require('body-parser');

const logs = require('./models/logs');

// set express()to a variable
const app = express();

//set a variable of port to 3000
const port = 3000;

// require mongoose
const mongoose = require('mongoose');

// Add dotenv
require('dotenv').config();

// upgrade your code to create your log in MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser:
    true, useUnifiedTopology: true });
    mongoose.connection.once('open', ()=> {
        console.log('connected to mongo');
    });

//MIDDLEWARE here. ALWAYS PLACE MIDDLEWARE BEFORE ROUTES
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


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
app.get('/logs', (req, res) => {
    logs.find({}, (error, allLogs) => {
        logs: allLogs
        res.render('views/Index');
    });
    
});

/*
app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('fruits/Index', {
            fruits: allFruits
        });
    });
});
*/ 
// New : An empty form for a new thing
app.get('/logs/new', (req, res) => {
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
    // Must be the last line of code to 
    // res.send(req.body);
    logs.create(req.body, (error, createdLog)=>{
        res.redirect('/Show');
    });

});


// Edit : A prefilled form to update a specific thing
// Show : Show me this one thing!

// Server listening
app.listen(port, () => {
    console.log(`listening on port, ${port}`);
});