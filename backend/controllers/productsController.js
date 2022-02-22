const productModel = require("../models/productModel")

module.exports = {
  getAll: async function (req, res, next) {
    try {
      let queryFind={}
      if(req.query.search){
        queryFind={name:{$regex:".*"+req.query.search+".*", $options:"i"}}
      }
      const document = await productModel.find(queryFind).populate("category").sort({price: -1})
      res.json(document)

    } catch (error) {
      next(error)
    }

  },
  getOnSale: async function (req,res,next){
    try {

      const document = await productModel.find({sale: true}).populate("category").sort({price: -1})
      res.json(document)

    } catch (error) {
      next(error)
    }
  },
  getByID: async function (req, res, next) {
    try {

      const document = await productModel.findById(req.params.id)
      res.json(document)

    } catch (error) {
      next(error)
    }
  },
  postProduct: async function (req, res, next) {
    try {
      const product = new productModel({
        name: req.body.name,
        sku: req.body.sku,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        condition: req.body.condition,
        image: req.body.image,
        category: req.body.category
      })

      const document = await product.save()
      res.status(201).json(document)
    } catch (error) {
      
      next(error)
    }

  },
  editProduct: async function (req, res, next) {
    try {

      const edit = await productModel.updateOne({_id: req.params.id}, req.body)
      res.status(200).json(edit)
      
    } catch (error) {
      next(error)
    }
  },
  deleteProduct: async function (req, res, next) {

    try {
      const deleted = await productModel.deleteOne({_id: req.params.id});
      res.status(200).json(deleted)
      
    } catch (error) {
      next(error)
    }

  }
}