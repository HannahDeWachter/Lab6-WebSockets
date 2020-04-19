const express = require('express');
const router = express.Router();
const coronaController = require('../../../controllers/api/v1/corona');

router.get("/", coronaController.getAll);
router.put("/updatestats", coronaController.update);

module.exports = router;