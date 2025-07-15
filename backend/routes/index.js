const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', IndexController.getIndex);

module.exports = router;