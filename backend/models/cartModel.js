const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage")

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "users"
    },
    products: {
        type: Array
    }
})


module.exports = mongoose.model("carts", cartSchema);

