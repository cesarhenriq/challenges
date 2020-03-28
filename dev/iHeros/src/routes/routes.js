import express from 'express'

import ProfileController from '../app/controllers/ProfileController'
import HeroController from '../app/controllers/HeroController'
import OccurrenceController from '../app/controllers/OccurrenceController'

const router = express.Router()

router.get('/profile', ProfileController.index)
router.put('/profile', ProfileController.update)
router.delete('/profile', ProfileController.destroy)

router.get('/heroes', HeroController.index)
router.get('/heroes/:id', HeroController.show)
router.post('/heroes', HeroController.create)
router.put('/heroes/:id', HeroController.update)
router.delete('/heroes/:id', HeroController.destroy)

router.get('/occurrences', OccurrenceController.index)
router.get('/occurrences/:id', OccurrenceController.show)
// router.post('/occurrences', OccurrenceController.create)
// router.put('/occurrences/:id', OccurrenceController.update)
// router.delete('/occurrences/:id', OccurrenceController.destroy)

export default router
