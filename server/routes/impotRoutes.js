const express = require('express');
const router = express.Router();
const impotController = require('../controllers/impotController');


// Get all impot
router.get('/', impotController.getAllImpot);


module.exports = router;
