const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bookingRoutes = require('./routes/booking');
const notFoundRoutes = require('./routes/404');
const sequelize = require('./util/database');
const booking = require('./models/booking');
const bookingType = require('./models/bookingType');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bookingRoutes);
app.use(notFoundRoutes);

sequelize.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });