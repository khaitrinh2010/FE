const express = require("express");
const { route } = require("./check.js"); // Correctly require a local file
const app = express();

// Use the imported route
app.use("/api/v1", route);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});


