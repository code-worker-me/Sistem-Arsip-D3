// TODO: Definisikan semua jalur (Route) aplikasi kalian disini (GET, POST, PUT, DELETE)
// routes/index.js
const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/', (req, res) => {
    db.query('SELECT * FROM archives ORDER BY created_at DESC', (err, results) => {
        if (err) throw err;
        res.render('index', { archives: results });
    });
});

module.exports = router;
