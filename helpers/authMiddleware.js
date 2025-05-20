require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../expressError");

const getTokenFromHeader = (req) => {
    const authHeader = req.headers.authorization;
    return authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;
};

const authenticateToken = (req, res, next) => {
    const token = getTokenFromHeader(req);
    if (!token) return next(new UnauthorizedError("Access denied"));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(new UnauthorizedError("Invalid token"));
        req.user = user;
        next();
    });
};

const authenticateAdmin = (req, res, next) => {
    if (req.body.password !== process.env.ADMIN_PASSWORD) {
        return next(new UnauthorizedError("Unauthorized"));
    }
    next();
};

module.exports = { authenticateToken, authenticateAdmin };
