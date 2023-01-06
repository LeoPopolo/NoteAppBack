"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const note_controller_1 = require("../controllers/note.controller");
// router.post('/', createPerson);
router.get('/', note_controller_1.getNotesController);
router.post('/', note_controller_1.addNoteController);
router.put('/', note_controller_1.updateNoteController);
router.delete('/:id', note_controller_1.deleteNoteController);
exports.default = router;
//# sourceMappingURL=note.route.js.map