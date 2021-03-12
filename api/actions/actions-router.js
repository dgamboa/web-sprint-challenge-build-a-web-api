// Write your "actions" router here!
const express = require('express');
const Actions = require('./actions-model');

const router = express.Router();

// Actions Endpoints
router.get('/', async (req, res, next) => {
  try {
    res.json({msg: "here"})
  } catch(err) { next(err) }
});

// Error Handling
router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: "Something went wrong in the actions router"
  });
});

// Export
module.exports = router;