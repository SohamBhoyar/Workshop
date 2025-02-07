const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path")

const index = require("./routes/index")
const registration = require("./routes/registration")

const expressSession = require('express-session');
const flash = require('connect-flash');

require("dotenv").config();

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    expressSession({
        resave : false,
        saveUninitialized: false,
        secret: 'your-secret-key',
    })
);
app.use(flash());

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", index);
app.use("/registration", registration);

app.listen(3000);