const Trip = require('../models/Trip');
const path = require('path');

exports.getTriptsPage = (req, res) => {
    res.render('triplist', { trips: Trip.getAllTrips() });
};

exports.getAddTripPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formNew.html'));
};

exports.addTrip = (req, res) => {
    const { description, date, transport, hotel } = req.body;
    Trip.addTrip(new Trip(description, date, transport, hotel));
    res.redirect('/');
};

exports.getEditTripPage = (req, res) => {
    const id = req.params.id;
    const trip = Trip.getTripById(id);
    if (!trip) {
        res.status(404).send('Trip not found');
    } else {
        trip.id = id; 
        res.render('formUpdate', { trip });
    }
};


exports.updateTrip = (req, res) => {
    const id = req.params.id;
    const { description, date, transport, hotel } = req.body;
    if (!Trip.updateTrip(id, description, date, transport, hotel)) {
        res.status(404).send('Trip not found');
    } else {
        res.redirect('/');
    }
};

exports.deleteTrip = (req, res) => {
    if (!Trip.deleteTrip(req.params.id)) {
        res.status(404).send('Trip not found');
    } else {
        res.redirect('/');
    }
};
