const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { UnauthorizedError } = require("../expressError");

const router = express.Router();

router.post("/login", (req, res, next) => {
    try {
        if (req.body.password !== config.adminPassword) {
            throw new UnauthorizedError("Invalid credentials");
        }

        const token = jwt.sign({ user: "admin" }, config.jwtSecret, { expiresIn: "1h" });

        res.json({ token });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
