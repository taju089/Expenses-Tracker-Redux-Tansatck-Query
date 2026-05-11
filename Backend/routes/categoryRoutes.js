const express = require('express')
const isAuth = require('../middlewares/isAuth')
const categoryController = require('../controllers/categoryController')
const categoryRouter = express.Router()

// ! Create Category
categoryRouter.post('/api/v1/category/create',isAuth, categoryController.create)
// ! Get Categories
categoryRouter.get('/api/v1/category/list',isAuth, categoryController.list)
categoryRouter.put('/api/v1/category/update/:id',isAuth, categoryController.update)
categoryRouter.delete('/api/v1/category/delete/:id',isAuth, categoryController.delete)

module.exports = categoryRouter;