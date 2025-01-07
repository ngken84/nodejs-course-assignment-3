import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

import users from './routes/users';

import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'layouts'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(users);

app.use('/', (req: Request, res: Response, next: () => void) => {
    res.status(404).render('404', {pageTitle : '404 Page Not Found'});
});

app.listen(3000);