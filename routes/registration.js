const express = require('express');
const router = express.Router();

const registration = require("../models/registration");

router.get('/', async function(req, res) {
    
    res.render("registration");
});

router.post('/create', async function(req, res) {
    try {
        // Extracting project details from the request body
        let { fullname, email, number, branch, division, transactionid, college } = req.body;

        // Logging form data for debugging purposes
        // console.log("Form Data:", req.body);


        // Create a new project in the database with the provided data
        let candidate = await registration.create({
            fullname, email, number, branch, division, transactionid, college
        });


        // Flash a success message for project creation
        req.flash("success", "registered successfully");

        // Redirect the user to the project creation page with the success message
        res.redirect("/");

    } catch (err) {
        // Catch any errors and send the error message as a response
        res.send(err.message);
    }
});

module.exports = router;