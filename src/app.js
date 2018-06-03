import loginRoutes from './controllers/loginController.js';
import authRoutes from './controllers/authController.js';
import express from 'express';
import session from 'express-session';
import io from 'socket.io';

const app = express();

const handleRender = (req, res) => {
  // TODO
  res.send('404');
}

app.use(session({
  name : 'sid',
  secret : 'sessionbeautybox',
  saveUninitialized : false,
  resave : false,
  cookie : {
    maxAge : 300 * 1000
  }
}));

app.use('/app', loginRoutes);
app.use('/app/auth', authRoutes);
app.use(handleRender);

app.listen(80, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('ctrl server started.');
  }
});

/*io(82).on('connection', function (socket) {
    socket.on('test', function (data) {
        console.log(data);
    });
});*/