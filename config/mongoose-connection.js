// Importing necessary modules
// Mongoose for interacting with MongoDB
const mongoose = require('mongoose'); 
const config = require("config"); // Config module to manage configurations (e.g., database URI)
const dbgr = require('debug')("production:mongoose"); // Debugging tool to log messages for development

// Connecting to the MongoDB database using the URI from the config file
mongoose
    .connect(config.get("MONGODB_URI")) // Get the MongoDB URI from the config and append the database name
    .then(function () {
        dbgr("Connected"); // Log a success message when the connection is successful
    })
    .catch(function (err) {
        dbgr(err); // Log the error message if the connection fails
    });

// Exporting the mongoose connection for use in other parts of the application
module.exports = mongoose.connection;
