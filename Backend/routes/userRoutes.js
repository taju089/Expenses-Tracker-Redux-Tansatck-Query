const express = require('express')
const userController = require('../controllers/userController')
const isAuth = require('../middlewares/isAuth')
const userRouter = express.Router()

userRouter.post('/api/v1/user/register', userController.register)
userRouter.post('/api/v1/user/login', userController.login)
userRouter.get('/api/v1/user/profile',isAuth,  userController.profile)
userRouter.put('/api/v1/user/password', isAuth, userController.changeUserPassword)
userRouter.put('/api/v1/user/changeProfile', isAuth, userController.updateProfile)


module.exports = userRouter;