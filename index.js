const express = require("express");
const app = express();

app.post("/login", (req, res) => {
    return res.json({ status: true, message: "login sucess." });
});

app.get("/logout", (req, res) => {
    return res.json({ status: true, message: "logout sucess." });
});

app.listen(3000, () => console.log("server is running.."));
