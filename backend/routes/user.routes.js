const express = require('express')
const router =  express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/authMiddleware')



router.post("/signup", [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname').isLength({min: 3}).withMessage('Fullname must be at least 3 characters long'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
],
userController.signupUser)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser)

module.exports = router