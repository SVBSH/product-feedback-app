import 'dotenv/config'

import express from 'express';
import morgan from 'morgan';

import { default as userRouter } from './routes/users.js';
import { getDirName } from './libs/helper.js';

import router from './routes/ProductRequests.router.js';

const app = express();
// Logs middleware
app.use(morgan('tiny'))

const __dirname = getDirName(import.meta.url);
app.use(express.static(__dirname + '/public'));


app.use(express.json());


function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// app.use(logger);

app.get('/', logger, logger, (req, res) => {
  console.log('here'); 1

  res.status(200)
    .json({ message: 'Error' });
});

app.use('/users', userRouter);
app.use('/suggestions', router);

app.use("*", (_, res) => res.status(404).json({ error: "not found" }));
// app.listen(process.env.SERVER_PORT || 9999);


export default app;