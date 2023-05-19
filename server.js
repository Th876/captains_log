// require express
const express = require('express');

//include the method-override package place this where you
const methodOverride = require('method-override');

// require body parser
const Log = require('./models/logs');

// set express()to a variable
const app = express();

//set a variable of port to 3000
const port = 3000;

// Add dotenv
require('dotenv').config();

const logsControllers = require('./controllers/logs');

// require mongoose
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
// upgrade your code to create your log in MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser:
    true, useUnifiedTopology: true });
    mongoose.connection.once('open', ()=> {
        console.log('connected to mongo');
    });

//MIDDLEWARE here. ALWAYS PLACE MIDDLEWARE BEFORE ROUTES

//use methodOverride. We'll be adding a query parameter to our delete form named _method

app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

// View engines
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine
());

// Routes
app.use('/logs', logsControllers);


// Server listening
app.listen(port, () => {
    console.log(`listening on port, ${port}`);
});