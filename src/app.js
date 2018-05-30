import loginRoutes from './controllers/loginController.js';
import express from 'express';
import session from 'express-session';

const app = express();

/*const handleRender = (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps == null) {
      res.status(404).send('Not found');
    }
    fetchComponentData(req.cookies.token).then((response) => {
      let isAuthorized = false;
      if (response[1].data.success === true) {
         isAuthorized = true;
      } else {
        isAuthorized = false;        
      }
      let page = renderFullPage(initView, state);
      return res.status(200).send('');
    })
    .catch(err => res.end(err.message));
  })
}*/

app.use(session({
    name: 'sid',
    secret: 'sessionbeautybox',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 300 * 1000
    }
}));

app.use('/login', loginRoutes);
/*app.use(handleRender);*/
app.listen(80, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('server started.');
  }
});