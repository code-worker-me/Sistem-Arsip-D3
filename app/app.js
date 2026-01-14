const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// --- 1. TAMBAHAN BARU: Panggil file Routes ---
const routes = require('./routes/index'); 

// Setup View Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// Setup Folder Public (CSS/JS)
app.use(express.static(path.join(__dirname, 'public')));

// Setup Baca Data Form
app.use(express.urlencoded({ extended: true })); 

// Setup Session
app.use(session({
    secret: 'arsip-rahasia',
    resave: false,
    saveUninitialized: true
}));

// --- 2. TAMBAHAN BARU: Gunakan Routes ---
// Ini yang bikin halaman "/" bisa dibuka
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 Server Berhasil Jalan!`);
    console.log(`🌐 Akses di: http://localhost:${PORT}`);
    console.log(`=========================================`);
});