const Actions = require('../actions/actions-model');

async function validateUserId(req, res, next) {
  const { id } = req.params;
  try {
    const action = await Actions.get(id);
    if (action) {
      req.action = action;
      next();
    } else {
      res.status(404).json({ message: "action not found" });
    }
  } catch(err) { next(err) }
};

module.exports = {
  validateUserId,
}