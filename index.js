const express = require("express")
const { connection } = require("./db")
const { BoardModel } = require("./Model/board.model")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const port = 1112

app.get('/', async (req, res) => {
    try {
        let boards = await BoardModel.find()
        res.status(200).json(boards)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, async () => {
    try {
        await connection
        console.log(`connected to db and server running at ${port}`)
    } catch (error) {
        console.log(error)
    }
})