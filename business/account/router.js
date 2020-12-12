var express = require("express");
const db = require("../../config/db").db;
var router = express.Router();
const jwt = require("jsonwebtoken");
router.get("/balance", (req, res) => {
    const token = req.get('Authorization');
    const decodedToken = jwt.verify(token.split(" ")[1],"thisisjustapocapp&é12\"'34");
    db.query("SELECT balance FROM account WHERE id_user = $1", [decodedToken.account.id], (err, result)=>{
        if(err){
            throw err;
        }
        console.log(result.rows)
        res.status(200).send(result.rows)
    })
})

// Update a user
router.post("/update/:id", (req, res) => {
    const user_id = req && req.params && req.params.id ? parseInt(req.params.id) : 0;
    const { balance } = req.body;
    if (user_id == 0) {
        res.status(401).send(null);
    } else {
        db.query("UPDATE account SET balance=$1 WHERE id_user=$2", [balance, user_id], (err, result) => {
            if (err) {
                throw err;
            }
            res.status(200).send({ updated: 1 });
        })
    }
})

module.exports = router;