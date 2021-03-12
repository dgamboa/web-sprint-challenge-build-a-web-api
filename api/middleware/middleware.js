const Actions = require('../actions/actions-model');

async function validateActionId(req, res, next) {
  const { id } = req.params;
  try {
    const action = await Actions.get(id);
    if (action) {
      req.action = action;
      next();
    } else {
      res.status(404).json({ message: "Action not found" });
    }
  } catch(err) { next(err) }
};

function validateAction(req, res, next) {
  const { project_id, description, notes } = req.body;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Missing action data" });
  } else if (!project_id || !description || !notes) {
    res.status(400).json({ message: "Missing required field" });
  } else if (description.length > 128) {
    res.status(400).json({ message: "Description should be 128 characters long max" });
  } else {
    next();
  }
};

module.exports = {
  validateActionId,
  validateAction
}