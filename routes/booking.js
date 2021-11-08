const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const bookingType = require('../models/bookingType');

router.get('/', (req, res, next) => {
    bookingType.findAll()
        .then(bookingType => {
            res.render('booking', {
                pageTitle: 'All Products',
                text: 'Booking Page',
                bookingTypes: bookingType,
                isFull: null,
            });
        });
});

router.get('/booking', (req, res, next) => {
    bookingType.findAll()
        .then(bookingType => {
            res.render('booking', {
                pageTitle: 'All Products',
                text: 'Booking Page',
                bookingTypes: bookingType,
                isFull: null,
            });
        });
});

router.post('/booking', (req, res, next) => {
    idBookingType = req.body.bookingType;
    bookingType.findByPk(idBookingType)
        .then(booking => {
            currentSlotBooked = booking.dataValues.slotBooked;
            maxCapacity = booking.dataValues.maxCapacity;
            if (currentSlotBooked < maxCapacity) {
                bookingType.update({
                    slotBooked: currentSlotBooked + 1
                }, 
                {
                    where: {id: idBookingType}
                }).then(
                    bookingType.findAll()
                    .then(bookingType => {
                        res.render('booking', {
                            pageTitle: 'All Products',
                            text: 'Booking Page',
                            bookingTypes: bookingType,
                            isFull: null,
                        });
                    })
                )
                .catch(err => console.log(err));
            } else {
                bookingType.findAll()
                    .then(bookingType => {
                        console.log("Full slot");
                        res.render('booking', {
                            pageTitle: 'All Products',
                            text: 'Booking Page',
                            bookingTypes: bookingType,
                            isFull: true
                        });
                    });
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;