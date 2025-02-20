const express = require("express");
const path = require("path");

const app = express();
const PORT1 = 3000;
const PORT2 = 8080;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Main route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server on both ports
app.listen(PORT1, () => {
    console.log(`Servidor en http://localhost:${PORT1}`);
});
app.listen(PORT2, () => {
    console.log(`Servidor en http://localhost:${PORT2}`);
});