const { Router } = require("express");
const express = require("express");
const app = express();
const importData = require("./data.json")


let port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("/products НАША АЙПИШКА 😎")
})

app.get("/products", (req, res) => {
    res.send(importData)
})



app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const foundGood = importData.find((data) => data.id == id);
    res.send(foundGood);
})

app.listen(port, () => {
    console.log(`EXAMPLE HERE ON PORT http://localhost:${port}`);
})