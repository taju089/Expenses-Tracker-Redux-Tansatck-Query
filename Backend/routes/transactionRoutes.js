const express = require('express')
const isAuth = require('../middlewares/isAuth')
const transactionController = require('../controllers/transactionController')
const transactionRouter = express.Router()


// ! Create transaction
transactionRouter.post('/api/v1/transaction/create',isAuth, transactionController.create)
// ! Get transactions
// transactionRouter.get('/api/v1/transaction/list',isAuth, transactionController.list)
// ! filter the transactions
transactionRouter.get('/api/v1/transaction/list',isAuth, transactionController.getFilteredTransactions)
// ! update Transaction
transactionRouter.put('/api/v1/transaction/update/:id',isAuth, transactionController.update)

// ! delete Transaction
transactionRouter.delete('/api/v1/transaction/delete/:id',isAuth, transactionController.delete)


module.exports = transactionRouter;