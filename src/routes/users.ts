import express, { Request, Response } from 'express';

const router = express.Router();

export const users: string[] = [];

router.get('/users', (req: Request, res: Response, next: () => void) => {
    res.render('users', {
        pageTitle: 'Users',
        users
    });
});

router.post('/create', (req: Request, res: Response, next: () => void) => {
    const { user } = req.body as { user: string };
    users.push(user);
    res.redirect('./');
});

router.get('/', (req: Request, res: Response, next: () => void) => {
    console.log(users);
    res.render('home', {
        pageTitle: 'Home'
    });
});

export default router;