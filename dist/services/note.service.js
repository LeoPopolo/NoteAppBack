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
exports.updateNote = exports.deleteNote = exports.addNote = exports.getNotes = void 0;
const note_repository_1 = require("../repositories/note.repository");
function getNotes() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, note_repository_1.get)();
    });
}
exports.getNotes = getNotes;
function addNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, note_repository_1.create)(note);
    });
}
exports.addNote = addNote;
function deleteNote(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, note_repository_1.purge)(id);
    });
}
exports.deleteNote = deleteNote;
function updateNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, note_repository_1.update)(note);
    });
}
exports.updateNote = updateNote;
//# sourceMappingURL=note.service.js.map