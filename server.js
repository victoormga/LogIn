const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./database"); 

const app = express();
const PORT1 = 3000;
const PORT2 = 8080;

// Serve static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Main route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Error en el servidor" });
        } else if (user) {
            res.redirect("/dashboard.html");  
        } else {
            res.send("<script>alert('Usuario o contraseña incorrectos'); window.location.href='/';</script>");
        }
    });
});

// Start server on both ports
app.listen(PORT1, () => {
    console.log(`Servidor en http://localhost:${PORT1}`);
});
app.listen(PORT2, () => {
    console.log(`Servidor en http://localhost:${PORT2}`);
});