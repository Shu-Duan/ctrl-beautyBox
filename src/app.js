import loginRoutes from './controllers/loginController.js';
import express from 'express';
import session from 'express-session';

const app = express();

const handleRender = (req, res) => {
  //XSS filter
}

app.use(session({
    name: 'sid',
    secret: 'sessionbeautybox',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 300 * 1000
    }
}));

app.use('/app', loginRoutes);
app.use(handleRender);
app.listen(80, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('ctrl server started.');
  }
});