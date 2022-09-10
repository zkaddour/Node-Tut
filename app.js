const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog')
//express app
const app = express();

// connect to database
const dbURI = 'mongodb://firstUser:Password123@localhost:6017/nodejs?authSource=admin';
const connectOptions    = {  useNewUrlParser: true,  useUnifiedTopology: true }

mongoose.connect(dbURI, connectOptions)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

// mongoose ad mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about this new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log("An error occured");
        });
})

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