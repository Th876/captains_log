// import
const mongoose = require("mongoose"); // require mongoose

// Configs
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema 
constructor
const model = mongoose.model // shorthand for model function


const logsSchema = new Schema(
    {
      title: {
        type: String,
      },
  
      entry: {
        type: String,
      }, 

      shipIsBroken: {
        type: Boolean, 
      }
    }
  );
  
  
  const Log = model("Log", logsSchema);
  
  //make this exportable to be accessed in `app.js`. Is the last line of code in this file
  module.exports = Log;