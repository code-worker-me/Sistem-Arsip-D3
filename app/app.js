// TODO: Ini adalah titik masuk aplikasi, setup Express, Middleware, dan Server Listener disini
// app/app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/index");

const app = express();
const PORT = process.env.APP_PORT || 3000;

/* =====================
   MIDDLEWARE
===================== */
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

/* =====================
   Routes
===================== */
app.use('/', mainRoutes);

/* =====================
   SERVER LISTENER
===================== */
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
