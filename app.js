const express = require('express');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    //res.send('<p>about page</p>');
    res.render('create', {title: 'Create Blog'});
});

// 404's
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});