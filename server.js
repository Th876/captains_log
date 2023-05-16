// require express
const express = require('express');

// set express()to a variable
const app = express();

//set a variable of port to 3000
const port = 3000;

// View engines
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine
());

// Index : Show all the things!
// New : An empty form for a new thing
app.get('/new', async (req, res) => {
        res.render('New');
});
// Delete : Get rid of this particular thing!
// Update : Update this specific thing with this updated form
// Create : Make a new thing with this filled out form
// Edit : A prefilled form to update a specific thing
// Show : Show me this one thing!

// Server listening
app.listen(port, () => {
    console.log(`listening on port, ${port}`);
});