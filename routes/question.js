import { Router } from 'express'
import * as questionCtrl from '../controllers/question.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, questionCtrl.create)
router.get('/', checkAuth, questionCtrl.index)
router.get('/:id', checkAuth, questionCtrl.show)
router.put('/:id', checkAuth, questionCtrl.update)
router.delete('/:id', checkAuth, questionCtrl.delete)

router.post('/:id/answers', checkAuth, questionCtrl.createAnswer)
router.put('/:questionId/answers/:answerId', checkAuth, questionCtrl.updateAnswer)

export { router }