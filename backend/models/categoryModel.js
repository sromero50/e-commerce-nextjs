const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage")

const categorySchema = mongoose.Schema({
    category: String
})

module.exports = mongoose.model("categories", categorySchema)