const express = require('express');
const router = express.Router();

const authenticationController = require('../controllers/authentication.controller');

router.post('/', authenticationController.login);

module.exports = router;
