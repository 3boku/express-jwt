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
        const access_token = jwt.sign(
            { sub: username },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: process.env.JWT_ACCESS_TIME }
        );
        return res.json({
            status: true,
            message: "login sucess",
            data: { access_token },
        });
    }

    return res.status(401).json({ status: true, message: "login faild" });
});

app.listen(3000, () => console.log("server is running.."));
