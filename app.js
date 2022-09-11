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

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result});
        })
        .catch((err) => {
            console.log(err);
        });
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