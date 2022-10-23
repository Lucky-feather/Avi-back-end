import { Router } from 'express'
import * as eventCtrl from '../controllers/event.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, eventCtrl.create)
router.get('/', checkAuth, eventCtrl.index)
router.get('/:id', checkAuth, eventCtrl.show)
router.put('/:id', checkAuth, eventCtrl.update)
router.delete('/:id', checkAuth, eventCtrl.delete)

export { router }