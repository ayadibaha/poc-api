var express = require("express");
const db = require("../../config/db").db;
var router = express.Router();

// Get one user
// router.get("/:id", (req, res) => {
//     const user_id = req && req.params && req.params.id ? parseInt(req.params.id) : 0;
//     db.query('SELECT * FROM users WHERE id=$1 and isAdmin=false', [user_id], (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.status(200).send(result);
//     })
// });

// Get all users
router.get("/all", (req, res) => {
    db.query('SELECT u.id,u.username,a.balance FROM users u, account a WHERE u.id = a.id_user and u.isadmin = false', (err, result) => {
        if (err) {
            throw err;
        }
        console.log("result", result.rows);
        res.status(200).send(result.rows);
    })
});

// Create a new user
router.post("/create", (req, res) => {
    const { username, password, isAdmin } = req.body;
    db.query("INSERT INTO users VALUES(null,$1,$2,$3)", [username, password, isAdmin], (err, results) => {
        if (err) {
            throw err;
        }
        res.status(201).send(results);
    })
});

// Update a user
router.post("/update/:id", (req, res) => {
    const user_id = req && req.params && req.params.id ? parseInt(req.params.id) : 0;
    const { username, password } = request.body;
    db.query("UPDATE users SETE username = $1, password = $2 WHERE id = $3 and isAdmin = false", [username, password, user_id], (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).send(result);
    })
})

// Delete a user
router.post("/delete/:id", (req, res) => {
    const user_id = req && req.params && req.params.id ? parseInt(req.params.id) : 0;
    db.query("DELETE FROM users WHERE id = $1 and isAdmin = false", [user_id], (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).send(result);
    })
})

module.exports = router;