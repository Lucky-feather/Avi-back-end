import { Router } from 'express'
import * as birdCtrl from '../controllers/bird.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, birdCtrl.create)
router.get('/', checkAuth, birdCtrl.index)
router.get('/:id', checkAuth, birdCtrl.show)
router.put('/:id', checkAuth, birdCtrl.update)
router.put('/:id/add-photo', birdCtrl.addPhoto)
router.delete('/:id', checkAuth, birdCtrl.delete)

export { router }