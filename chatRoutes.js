const express = require('express');
const { getMessages } = require('../controllers/chatController');

const router = express.Router();

router.get('/:roomId', getMessages);

module.exports = router;
