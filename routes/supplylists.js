import { Router } from 'express'
import * as supplyListCtrl from '../controllers/supplyList.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, supplyListCtrl.create)
router.get('/', checkAuth, supplyListCtrl.index)
router.get('/:id', checkAuth, supplyListCtrl.show)
router.put('/:id', checkAuth, supplyListCtrl.update)
router.delete('/:id', checkAuth, supplyListCtrl.delete)

export { router }