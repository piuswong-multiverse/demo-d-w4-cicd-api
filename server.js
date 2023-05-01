const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes/index');
const { seedAndCheck } = require('./db/seed/seed');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', router);

// Set up ports so deployment via Railway is possible; 
// see: https://docs.railway.app/troubleshoot/fixing-common-errors
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    seedAndCheck(); // resets database
    console.log(`Server live at http://localhost:${port}`)
});