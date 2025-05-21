const express = require("express");
const cors = require("cors");
const mailingListRoutes = require("./routes/MailingListRoutes");
const loginRoutes = require("./routes/LoginRoute");

const app = express();

app.use(cors({ origin: "https://sturgillsturtles.com" }));

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Root route accessed!");
    res.json({ message: "API root is working!" });
});


// Your other routes
app.use("/mailing-list", mailingListRoutes);
app.use("/auth", loginRoutes);

// Error handling middleware should come last
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Internal Server Error" });
});

module.exports = app;
