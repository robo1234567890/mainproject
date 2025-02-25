const express = require("express");
const path = require("path");

const app = express();

// Serve static files (like CSS, images, etc.)
app.use(express.static("public"));

// Route to serve the header HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "header.html"));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
