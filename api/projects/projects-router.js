// Write your "projects" router here!
const express = require('express');
const Projects = require('./projects-model');
const { validateProject, validateProjectId } = require('../middleware/middleware');

const router = express.Router();

// Actions Endpoints
router.get('/', async (req, res, next) => {
  try {
    res.json({ message: "get all here" })
  } catch(err) { next(err) }
});



// Error Handling
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: "Something went wrong in the actions router"
  });
});

// Export
module.exports = router;