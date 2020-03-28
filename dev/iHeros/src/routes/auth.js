import express from 'express'

import SessionController from '../app/controllers/SessionController'

const router = express.Router()

router.post('/register', SessionController.create)
router.post('/logon', SessionController.logon)

export default router
