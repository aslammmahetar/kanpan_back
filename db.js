const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://nawabpvt:aslam@cluster0.3n09h5y.mongodb.net/kanban")

module.exports = { connection }