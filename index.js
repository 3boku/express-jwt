require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

// middleware
app.use(express.json());

// routes
// registeration

//login
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "raj" && password === "123456") {
        const access_token = jwt.sign({ sub: username }, "");
        return res.json({ status: true, message: "login sucess" });
    }

    return res.status(401).json({ status: true, message: "login faild" });
});

app.listen(3000, () => console.log("server is running.."));
