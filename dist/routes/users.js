"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.users = [];
router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        users: exports.users
    });
});
router.post('/create', (req, res, next) => {
    const { user } = req.body;
    exports.users.push(user);
    res.redirect('./');
});
router.get('/', (req, res, next) => {
    console.log(exports.users);
    res.render('home', {
        pageTitle: 'Home'
    });
});
exports.default = router;
