const express = require('express');
const router = express.Router();
const db = require('../config/database');

// --- 1. MIDDLEWARE ("SATPAM") ---
// Fungsi ini tugasnya ngecek: User bawa tiket session gak?
// Kalau gak ada, tendang balik ke halaman Login.
const cekLogin = (req, res, next) => {
    if (req.session && req.session.userId) {
        return next(); // Silakan masuk
    }
    res.redirect('/login'); // Balik ke pos satpam (Login)
};

// --- 2. HALAMAN DASHBOARD (DIPROTEKSI) ---
// Perhatikan ada 'cekLogin' disitu. Itu satpamnya.
router.get('/', cekLogin, (req, res) => {
    // Kita kirim data user ke halaman dashboard biar bisa nampilin nama
    res.render('index', { user: req.session.user });
});

// --- 3. HALAMAN LOGIN (PUBLIC) ---
router.get('/login', (req, res) => {
    // Kalau user iseng buka /login padahal udah login, lempar ke dashboard
    if (req.session && req.session.userId) {
        return res.redirect('/');
    }
    res.render('auth/login');
});

// --- 4. PROSES LOGIN (POST) ---
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Cek ke Database
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            console.error(err);
            return res.redirect('/login');
        }

        // Kalau usernamenya ada
        if (results.length > 0) {
            const user = results[0];

            // Cek Password (Sederhana dulu, belum di-encrypt biar gampang)
            if (password === user.password) {
                // LOGIN SUKSES!
                // Simpan data user di session (Tiket Masuk)
                req.session.userId = user.id;
                req.session.user = user;
                return res.redirect('/');
            }
        }
        
        // Kalau salah password/username
        console.log("Login Gagal: Salah username/password");
        res.redirect('/login');
    });
});

// --- 5. PROSES REGISTER (POST) ---
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Email kita abaikan dulu karena di database (init.sql) belum ada kolom email
    
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.redirect('/login'); 
        }
        // Sukses daftar, suruh login
        console.log("Register Berhasil!");
        res.redirect('/login');
    });
});

// --- 6. PROSES LOGOUT ---
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) console.log(err);
        res.redirect('/login'); // Balik ke login setelah logout
    });
});

// --- 7. ROUTES LAIN (ARSIP & PROFIL) ---
// Jangan lupa kasih 'cekLogin' juga biar gak bisa ditembus
router.get('/archive', cekLogin, (req, res) => {
    db.query('SELECT * FROM archives ORDER BY created_at DESC', (err, results) => {
        if (err) throw err;
        res.render('archives/index', { archives: results, user: req.session.user });
    });
});

router.get('/profile', cekLogin, (req, res) => {
    res.render('profile', { user: req.session.user });
});

router.get('/archive/create', cekLogin, (req, res) => {
    res.render('archives/create', { user: req.session.user });
});

module.exports = router;