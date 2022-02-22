const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, errorMessage.GENERAL.required],
        unique: true
    },
    sku: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        required: [true, errorMessage.GENERAL.required]
    },
    price: {
        type: Number,
        required: [true, errorMessage.GENERAL.required],
        min: 1,
        get: (value) => {
           return `$ ${value}`
        }
    },
    quantity: {
        type: Number,
        required: [true, errorMessage.GENERAL.required],
        min: 1
    },
    condition: {
        type: String,
        required: [true, errorMessage.GENERAL.required],
        enum: ['brand_new', 'used', 'open_box']
        
    },
    image: {
        type: String
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
    sale: {
        type: Boolean,
        default: false
    }
})


// productSchema.virtual("price_currency").get(function(){return `$ ${this.price}`} )
productSchema.set("toJSON", { getters: true, virtuals: true })

module.exports = mongoose.model("products", productSchema)
