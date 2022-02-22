const userModel = require("../models/userModel");
const cardModel = require("../models/cartModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { USERS } = require("../util/errorMessage");
const cartModel = require("../models/cartModel");

module.exports = {
    getAll: async function (req, res, next) {
        try {

            const document = await userModel.find()
            res.json(document)

        } catch (error) {
            next(error)
        }

    },
    signup: async function (req, res, next) {
        try {
            const user = new userModel({
                email: req.body.email,
                password: req.body.password
            })

            const document = await user.save()
            //create cart for the new user
            const cart = new cartModel({user: document._id, products: []})
            const cartCreated = await cart.save()
            res.status(201).json(document)
        } catch (error) {

            next(error)
        }

    },
    login: async function (req , res, next){
        const user = await userModel.findOne({email:req.body.email})
        if (!user){
            res.json({"msg": "email not found", error: true })
            return
        }
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign({userId: user._id, email: user.email}, req.app.get("secretKey"), {expiresIn: "1h"})
            return res.json({"token": token, error: false })
        }else{
          return res.json({"msg": "wrong password", error: true })
            
        }
    }
}