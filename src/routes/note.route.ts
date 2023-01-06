import { Router } from 'express';

const router: Router = Router();

import { 
         getNotesController,
         addNoteController,
         updateNoteController,
         deleteNoteController
       }  from '../controllers/note.controller';

// router.post('/', createPerson);
router.get('/', getNotesController);
router.post('/', addNoteController);
router.put('/', updateNoteController);
router.delete('/:id', deleteNoteController);

export default router;