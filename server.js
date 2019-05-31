const express = require('express')

const app = express()
const port = 3000

//body parser stuffs
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//require handlers
const handlers = require("./handlers");

//handlers
app.get("/app/users",handlers.getUsers)
app.post("/app/users",handlers.insertUsers)
app.put("/app/users",handlers.updateUsers)
app.delete("/app/users",handlers.deleteUsers)

app.listen(port, function(){
    console.log("Listening on "+port +"!!")
})

