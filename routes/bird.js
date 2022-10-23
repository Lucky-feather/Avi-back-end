import { Router } from 'express'
import * as birdCtrl from '../controllers/bird.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, blogsCtrl.create)
router.get('/', checkAuth, blogsCtrl.index)
router.get('/:id', checkAuth, blogsCtrl.show)
router.put('/:id', checkAuth, blogsCtrl.update)
router.delete('/:id', checkAuth, blogsCtrl.delete)

export { router }