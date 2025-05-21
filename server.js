const app = require("./app");
const config = require("./config");
const pool = require("./db");

const PORT = config.port || 5000;
pool.connect((err) => {
    if (err) {
        console.error('Failed to connect to the database', err);
        process.exit(1);

    } else {
        console.log('Connected to the database');
    }

    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    });
});