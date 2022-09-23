const express = require("express");
const app = express();
const importData = require("./data.json")
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("АХХХААААХХАААА ЖАРДЫН БРАТ 😂")
})

app.get("/shoes", (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if(endIndex < importData.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if(startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }

    results.results =importData.slice(startIndex, endIndex)


    res.send(results)
})

app.listen(port, () => {
    console.log(`EXAMPLE HERE ON PORT http://localhost:${port}`);
})