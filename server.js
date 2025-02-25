const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Route for signup page
app.get("/", (req, res) => {
    res.render("signup");
});

// Handle form submission
app.post("/signup", (req, res) => {
    const { name, mobile, email, address } = req.body;
    console.log("User Details:", { name, mobile, email, address });
    res.send("Sign-up successful!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
