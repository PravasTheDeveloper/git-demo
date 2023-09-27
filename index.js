const express = require("express")
const app = express()

app.get("/api", async (req, res) => {
    res.send("hei man")
    console.log("Working")
})

app.listen(5000, () => {
    console.log("Runnig Port")
})