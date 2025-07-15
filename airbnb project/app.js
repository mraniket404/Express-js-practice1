const express = require('express');
const path = require('path');

const userRouter = require('./routes/userRouter');

const hostRouter = require('./routes/hostRouter');
const utilpath = require('./utils/utilpath');


const app = express();

app.set('view engine', 'ejs');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRouter);

app.use(hostRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(utilpath, 'views', 'error.html'));
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});