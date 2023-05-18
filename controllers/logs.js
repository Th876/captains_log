const express = require('express');
const router = express.Router();
const Log = require('../models/logs');

// Index : Show all the things!
router.get('/', (req, res) => {
    Log.find({}, (error, allLog) => {
        res.render('Index', {logs: allLog} ); 
    });
});

// New : An empty form for a new thing
router.get('/new', (req, res) => {
        res.render('New');
});
// Delete : Get rid of this particular thing! 

router.delete('/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');//redirect back to logs index
    });
});

// Update : Update this specific thing with this updated form
router.put('/:id', (req, res)=>{
    console.log(req.body);
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, 
updatedLog)=>{
       console.log(updatedLog)
        res.redirect(`${req.params.id}`);
    });
});


// Create : Make a new thing with this filled out form
router.post('/', (req, res) => {
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
router.get('/:id/edit', (req, res)=> {
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
router.get('/:id', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        res.render('Show', {log:foundLog})
    });
});

module.exports = router;