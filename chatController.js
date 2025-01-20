const Message = require('../models/Message');

// Controller to handle saving a message
const sendMessage = async (req, res) => {
  const { content, roomId, replyTo } = req.body;
  try {
    const newMessage = new Message({
      sender: req.user.id,  // Get sender from auth middleware
      content: content,
      room: roomId,
      replies: replyTo ? [replyTo] : [],  // Handle replies
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error });
  }
};

module.exports = { sendMessage };
