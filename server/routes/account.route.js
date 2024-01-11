const express = require('express');
const pool = require('../config/db.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const {
  loginUser,
  updatePassword,
} = require('../controllers/account.controllers');
const { verifyToken } = require('../utils/verifyUser');

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWTSECRET;

const router = express.Router();

// --- LOGIN USER ---
router.post('/login', loginUser);

// --- UPDATE USER PASSWORD ---
router.patch('/update-password', verifyToken, updatePassword);

module.exports = router;
