// Write your "actions" router here!
const express = require('express');
const Actions = require('./actions-model');

const router = express.Router();

// Actions Endpoints
router.get('/', async (req, res, next) => {
  try {
    const actions = await Actions.get();
    res.json(actions);
  } catch(err) { next(err) }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.json({msg: "here get id"})
  } catch(err) { next(err) }
});

router.post('/', async (req, res, next) => {
  try {
    res.json({msg: "here post"})
  } catch(err) { next(err) }
});

router.put('/:id', async (req, res, next) => {
  try {
    res.json({msg: "here put"})
  } catch(err) { next(err) }
});

router.delete('/:id', async (req, res, next) => {
  try {
    res.json({msg: "here delete"})
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