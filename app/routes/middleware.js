// routes/middleware.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app) => {
    // View Engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../view'));

    // Static files
    app.use(express.static('public'));
    app.use('/uploads', express.static('uploads'));

    // Body parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};
