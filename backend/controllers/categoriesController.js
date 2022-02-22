const categoryModel = require("../models/categoryModel")

module.exports = {
    getAll: async function (req, res, next) {
        try {

            const document = await categoryModel.find()
            res.json(document)

        } catch (error) {
            next(error)
        }

    },
    postCategory: async function (req, res, next) {
        try {
            const category = new categoryModel({
                category: req.body.category
            })

            const document = await category.save()
            res.status(201).json(document)
        } catch (error) {

            next(error)
        }

    }
}