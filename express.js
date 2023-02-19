const express = require("express")
const app = express();

const server = app.listen(5000, () => {})

//the text to be sent as result / display in web window
app.get("/", (req, res) => res.send(
  `<html><body><h1>https://dash.painfuego.repl.co</h1></body></html>`
  ))
