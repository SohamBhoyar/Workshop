// Importing mongoose to define the schema and interact with MongoDB
const mongoose = require("mongoose");

// Defining the schema for the 'admin' model
const registrationSchema = mongoose.Schema({
    fullname: { 
        type: String, // Admin's full name
        required: true // Ensures the field is required
    },
    email: { 
        type: String, // Admin's email
        required: true, // Ensures the field is required
        unique: true // Ensures the email is unique across all admin records
    },
    number: { 
        type: Number, // Admin's password
        required: true // Ensures the field is required
        
    },
    branch: {
        type: String, // Admin's email
        required: true, // Ensures the field is required
    },
    division: {
        type: String, // Admin's email
        required: true, // Ensures the field is required
    },
    transactionid: {
        type: String, // Admin's email
        required: true, // Ensures the field is required
    },
    college: {
        type: String, // Admin's email
        required: true, // Ensures the field is required
    },
});

// Exporting the model to be used in other files for database interaction
module.exports = mongoose.model("registration", registrationSchema);
