const { AuthorizationError } = require("./exceptions");

const validateRole = (roles) => async (req, _, next) => {
  const { user } = req;
  if (roles.includes(user.role)){
    next()
  } else
    next(new AuthorizationError());
};

module.exports = {
  validateRole,
};
