const express = require('express');
const router = express.Router();
const statsController = require('../../../controllers/api/v1/corona');

router.get("/", statsController.getStats);
router.put("/updatestats", statsController.updateStats);

module.exports = router;