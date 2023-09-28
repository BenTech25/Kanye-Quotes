import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express()
const port = 3000
const apikey = ""

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.post("/yequote", async (req, res) => {
    console.log(req.body)
    try {
        const response = await axios.get("https://api.kanye.rest")
        const resultat = response.data
        res.render("index.ejs", {quote : resultat["quote"]})
         

    } catch(error) {
        res.status(404).send(error.message)
    }
})

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(port, () => {console.log(`The Server Is Running On ${port}`)})
