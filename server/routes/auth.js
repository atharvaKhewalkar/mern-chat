const express = require ('express');

const{signUp, login} = require('../controllers/auth.js');

const router = express.router();

router.post('./signup', signUp);
router.post('./login', login);

module.exports = router;