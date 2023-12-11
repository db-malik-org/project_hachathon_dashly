const express = require('express');
const router = express.Router();
const impotController = require('../controllers/impotController');


// Get all impot
router.get('/', impotController.getAllImpot);

router.get('/regions', impotController.getAllRegions);

router.get('/impotByRegion', impotController.getImpotByRegion);


module.exports = router;
