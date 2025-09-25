const express = require('express');
const router = express.Router();

const sendButton = require('../sendButton');

router.post('Home', sendButton);