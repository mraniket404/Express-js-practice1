const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.get('/', (req, res, next) => {
    res.render("index")
});

app.get('/about/:name', (req, res, next) => {
    res.send(`Welcome ${req.params.name}`);
});

app.get ('/contact/:name/:age', (req, res, next) => {
    res.send(`Welcome ${req.params.name} your age is ${req.params.age}`);
});


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});