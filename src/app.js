const express = require('express');
const notfoundMiddleware = require('./middlewares/notfound');
const errorMiddleware = require('./middlewares/error');
const categoryRouter = require('./routes/categoryroute');
const transactionRouter = require('./routes/transectionRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/category', categoryRouter);
app.use('/transaction', transactionRouter);

app.use(notfoundMiddleware);
app.use(errorMiddleware);

app.listen(8000, () => console.log('server is running port 8000'));