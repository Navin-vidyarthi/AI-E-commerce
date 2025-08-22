import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { getAdmin, getCurrentUser } from '../controller/UserController.js'
import adminAuth from '../middleware/adminAuth.js'

let userRouters = express.Router()

userRouters.get('/getcurrentuser', isAuth, getCurrentUser)
userRouters.get('/getadmin', adminAuth, getAdmin)

export default userRouters
