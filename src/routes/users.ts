import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/users', (req: Request, res: Response, next: () => void) => {
    res.render('users', {
        pageTitle: 'Users'
    });
});

router.get('/', (req: Request, res: Response, next: () => void) => {
    res.render('home', {
        pageTitle: 'Home'
    });
});

export default router;