const express = require("express");
const app = express();
const dbConnect = require('./Config/Database');
const employeeRoutes = require("./Routes/employeeRoutes");
const cors = require('cors');

app.use(express.json());
require("dotenv").config();

app.use(
    cors({
        origin: "*",
    })
);

const PORT = process.env.PORT || 4000;

// Routes
app.use("/api/v1", employeeRoutes);

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>App is running at port ${PORT}<h1>`);
});