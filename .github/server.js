const express = require("express")
const db = require("./database")

const server = express()

server.use(express.json())

server.post("/users", (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            message: "Need a name for the User",
        })
    }
    const newUser = db.createUser({
        name: req.body.name,
    })
    // 201 User Create
    res.status(201).json(newUser)
})

server.listen(8080, ()=> {
    console.log("server started on port 8080")
})