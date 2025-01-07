"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users'
    });
});
router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home'
    });
});
exports.default = router;
