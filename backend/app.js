const express = require('express')
const bodyParser = require('body-parser')

const storage = require("./storage/storage")
const matchRepository = require("./repositories/match-repository")

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
const port = 3000

app.use(urlencodedParser)
app.use(jsonParser)

app.get('/users', (req, res) => {
    storage.getAllUsers()
        .then(users => res.send(users))
        .catch(error => {
            console.error(error)
            res.send("Failed to fetch matches.")
        })
})

app.get('/matches', (req, res) => {
    storage.getAllMatches()
        .then(matches => res.send(matches))
        .catch(error => {
            console.error(error)
            res.send("Failed to fetch users.")
        })
})

app.post('/users', (req, res) => {
    storage.addUser(req.body)
        .then(user => res.send(user))
        .catch(error => {
            console.error(error)
            res.send(error.message)
        })
})

app.post('/matches', (req, res) => {
    matchRepository.recordMatch(req.body)
        .then(match => res.send(match))
        .catch(error => {
            console.error(error)
            res.send(error.message)
        })
})

app.listen(port, () => console.log(`Foosball backend running on ${port}!`))
