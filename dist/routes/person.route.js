"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const person_controller_1 = require("../controllers/person.controller");
// router.post('/', createPerson);
router.get('/', person_controller_1.getPersonsController);
exports.default = router;
//# sourceMappingURL=person.route.js.map