import { Router, response } from "express";
import db from '../../config/db';
import jwt from 'jsonwebtoken';
var router = Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    db.query("SELECT * FROM users WHERE username = $1 and password = $2", [username, password], (error, results) => {
        if (error) {
            throw error;
        }
        // JWT Logic
        const accessToken = jwt.sign(
            { account: results },
            "thisisjustapocapp&é12\"'34",
            { expiresIn: "24h" }
        );
        return res.status(200).send(accessToken);
    })
})