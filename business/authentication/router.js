var express = require("express");
const db = require("../../config/db").db;
var jwt = require("jsonwebtoken");
var router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    db.query("SELECT * FROM users WHERE username = $1 and password = $2", [username, password], (error, results) => {
        if (error) {
            return res.status(401).send({ token: "" });
        }
        // JWT Logic
        const accessToken = jwt.sign(
            { account: results && results.rowCount > 0 ? results.rows[0] : null },
            "thisisjustapocapp&é12\"'34",
            { expiresIn: "24h" }
        );
        return res.status(200).send({ token: accessToken, isAdmin: results && results.rowCount > 0 ? results.rows[0]["isadmin"] : false });
    })
})
module.exports = router;