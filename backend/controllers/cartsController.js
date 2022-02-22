const cartModel = require("../models/cartModel")

module.exports = {
    getCart: async function (req, res, next) {
        try {
            const document = await cartModel.findOne({user: req.params.userID})
            res.json(document)

        } catch (error) {
            next(error)
        }

    },
    addProductToCart: async function (req, res, next) {
        try {
            //search if the product exists in the cart
            const document = await cartModel.findOne({user: req.params.userID, "products.product": req.body.product }) 
            
            //if the products exist, it will increase the quantity. If it doesn't it will add the new product with qty 1
            if(document){
                const edit = await cartModel.updateOne({"user": req.params.userID, "products.product": req.body.product },{  $inc: {"products.$.quantity": 1}})
                res.status(200).json(edit)
            }else{
                const edit = await cartModel.updateOne({"user": req.params.userID},{ $push: {products: {product: req.body.product, quantity: 1}}})
                res.status(200).json(edit)
            }
        } catch (error) {
            next(error)
        }

    },
    removeProductFromCart: async function (req, res, next) {
        try {
            //search the cart of the user
            const document = await cartModel.findOne({user: req.params.userID, "products.product": req.body.product }) 

            //if the qty of product is greater than 1 === decrease qty by 1. And if qty is equal to 1 === remove the product from the cart
            const remove = await document.products.forEach(async item => {
                if(item.product === req.body.product && item.quantity > 1  ){
                    const document = await cartModel.updateOne({"user": req.params.userID, "products.product": req.body.product, "products.quantity": {$gt:1}  },{  $inc: {"products.$.quantity": -1}})
                    
                    res.status(200).json({"msg": "quantity decreased"})
                }else if (item.product === req.body.product && item.quantity === 1){
                    const document = await cartModel.updateOne({"user": req.params.userID, "products.product": req.body.product, "products.quantity": {$eq:1}},{ $pull: { "products": { "product": req.body.product } }})
                    
                    res.status(200).json({"msg": "product removed from cart"})
                }
            })            
            
        } catch (error) {
            next(error)
        }

    }
}