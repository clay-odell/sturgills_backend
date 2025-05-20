require("dotenv").config();

const config = {
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    adminPassword: process.env.ADMIN_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
};

module.exports = config;
