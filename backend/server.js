const express = require("express")
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

app.use("", () => {
    console.log("server page !!")
})

app.listen()