// TODO: Ini adalah titik masuk aplikasi, setup Express, Middleware, dan Server Listener disini
const express = require('express');

const indexRoutes = require('./routes/index');

const app = express();
require('./routes/middleware')(app);

// Route
app.use('/', indexRoutes);

// Run Server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})