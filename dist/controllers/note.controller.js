"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteController = exports.deleteNoteController = exports.addNoteController = exports.getNotesController = void 0;
const note_service_1 = require("../services/note.service");
function getNotesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, note_service_1.getNotes)()
            .then(data => {
            return res.status(200).json({
                data
            });
        })
            .catch(err => {
            return res.status(400).send(err.message);
        });
    });
}
exports.getNotesController = getNotesController;
;
function addNoteController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        yield (0, note_service_1.addNote)(body)
            .then(data => {
            return res.status(200).json({
                data
            });
        })
            .catch(err => {
            return res.status(400).send(err.message);
        });
    });
}
exports.addNoteController = addNoteController;
;
function deleteNoteController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = parseInt(req.params.id);
        yield (0, note_service_1.deleteNote)(id)
            .then(data => {
            return res.status(200).json({
                data
            });
        })
            .catch(err => {
            return res.status(400).send(err.message);
        });
    });
}
exports.deleteNoteController = deleteNoteController;
;
function updateNoteController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        yield (0, note_service_1.updateNote)(body)
            .then(data => {
            return res.status(200).json({
                data
            });
        })
            .catch(err => {
            return res.status(400).send(err.message);
        });
    });
}
exports.updateNoteController = updateNoteController;
;
//# sourceMappingURL=note.controller.js.map