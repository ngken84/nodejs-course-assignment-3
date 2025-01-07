import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/users', (req: Request, res: Response, next: () => void) => {
    res.render('users', {

    });
});

router.get('/', (req: Request, res: Response, next: () => void) => {
    res.render('users', {

    });
});

export default router;