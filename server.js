// require express
const express = require('express');

//include the method-override package place this where you
const methodOverride = require('method-override');

// require body parser
const bodyParser = require('body-parser');

const Log = require('./models/logs');

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

//use methodOverride. We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

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
    Log.find({}, (error, allLog) => {
        res.render('Index', {logs: allLog} ); 
    });
});

// New : An empty form for a new thing
app.get('/logs/new', (req, res) => {
        res.render('New');
});
// Delete : Get rid of this particular thing! 

app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');//redirect back to logs index
    });
});

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
    Log.create(req.body, (err, createdLog)=>{
        res.redirect('/logs');
    });
});

// Edit : A prefilled form to update a specific thing
app.get('/logs/:id/edit', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{ //find the log
      if(!err){
        res.render('Edit',
    		{logs: foundLog //pass in the found log so we can prefill the form
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});


// Show : Show me this one thing!
app.get('/logs/:id', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        res.render('Show', {log:foundLog})
    });
});

// Server listening
app.listen(port, () => {
    console.log(`listening on port, ${port}`);
});