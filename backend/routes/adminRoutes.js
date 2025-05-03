const express = require('express');
const router = express.Router();
const { getAllStudents } = require('../controllers/adminController');

router.get('/students', getAllStudents);  // Fetch all students

module.exports = router;
