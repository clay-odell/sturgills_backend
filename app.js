const express = require("express");
const cors = require("cors");
const mailingListRoutes = require("./routes/MailingListRoutes");
const loginRoutes = require("./routes/LoginRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/mailing-list", mailingListRoutes);
app.use("/auth", loginRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Internal Server Error" });
});

module.exports = app;
