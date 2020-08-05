const express = require("express");
const isAuthenticated = require('./business/authentication/isAuthenticated');
const app = express()
const port = 3000
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(isAuthenticated.isAuthenticated)
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
// API Routes
var usersRoutes = require("./business/users/router");
app.use("/users", usersRoutes);

var adminRoutes = require("./business/admins/router");
app.use("/admins", adminRoutes);

var authenticationRoutes = require("./business/authentication/router");
app.use("/",authenticationRoutes);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))