const express = require('express');
const router = express.Router();
const { getStudent } = require('../controllers/studentController');

router.get('/:id', getStudent);  // Fetch individual student data

module.exports = router;
