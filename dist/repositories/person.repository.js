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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.create = void 0;
const database_1 = __importDefault(require("../database"));
function create(person) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            database_1.default.query(`INSERT INTO person () VALUES ()`, (err, data) => {
                if (err)
                    return reject(err);
                resolve(data.rows[0]);
            });
        });
    });
}
exports.create = create;
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            database_1.default.query(`SELECT * FROM person`, (err, data) => {
                if (err)
                    return reject(err);
                resolve(data.rows);
            });
        });
    });
}
exports.get = get;
//# sourceMappingURL=person.repository.js.map