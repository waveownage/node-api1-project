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
        bio: req.body.bio,
    })
    res.status(201).json(newUser)
})

server.get("/users", (req, res) => {
    const users = db.getUsers()
    res.json(users)
})

server.get("/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id)

    if(user) {
        res.json(user)
    } else {
        res.status(404).json({
            message: "User not found",
        })
    }

})

server.put("/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id)

    if (user) {
        const updatedUser = db.updateUser(user.id, {
            name: req.body.name || user.name,
            bio: req.body.bio || user.bio,
        })
        res.json(updatedUser)
    } else {
        return res.status(400).json({
            message: "Need a name for the User",
    })}

})

server.delete("/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id)

    if(user) {
        deleteUser = db.deleteUser(user.id)
} else { return res.status(404).json({
    message: "User Not Found",

})}})

server.listen(8080, ()=> {
    console.log("server started on port 8080")
})