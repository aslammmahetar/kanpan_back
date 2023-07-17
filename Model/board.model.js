const mongoose = require("mongoose")

const BoardSchema = mongoose.Schema({
    _id: String,
    boards: Array
}, {
    versionKey: false
})

const BoardModel = mongoose.model("boards", BoardSchema)

module.exports = { BoardModel }