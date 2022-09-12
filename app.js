const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
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
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.render('about', {title: 'About'});
});

app.use('/blogs', blogRoutes);

// 404's
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});