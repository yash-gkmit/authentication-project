const express = require('express');
const { register, login, logout, activeUser, fetchpublicAPI } = require('../controllers/auth.controller');
const { authenticateToken } = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticateToken, logout); 
router.get('/active', authenticateToken, activeUser); 
router.get('/publicapi', authenticateToken, fetchpublicAPI); 

module.exports = router;