const express = require("express")
const db = require("./data")

const server = express()

server.use(express.json())

server.post("/users", (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            message: "User needs a Name",
        })
    }
    const newUser = db.createUser({
        name: req.body.name,
        bio: req.body.bio,
    })
    res.status(201).json(newUser)
})

server.listen(8080, ()=> {
    console.log("server started on port 8080")
})