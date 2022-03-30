'use strict';

const express = require('express');
const router = express.Router();


  
router.use('/booking', require('./booking/booking-router'));

module.exports = router;
