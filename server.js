const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Main route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server on both ports
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
}); 