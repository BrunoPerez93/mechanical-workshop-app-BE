const bcryptjs = require("bcryptjs");
const { User } = require("../models");
const { LoginError, BadRequest, Errors } = require("../utils/exceptions");
const { capitalizeFirstLetter } = require("../utils/common");
const jwt = require("jsonwebtoken");

const login = async (userName, password) => {
  const userFound = await User.findOne({
    where: { userName },
    raw: true,
  });
  if (!userFound || !userFound.password)
    throw new BadRequest(Errors.credentialsError);
  const passwordValidation = await bcryptjs.compare(password, userFound.password);
  if (!passwordValidation)
    throw new BadRequest(Errors.credentialsError);
  const jwtToken = jwt.sign(
    {
      id: userFound.id,
      role: userFound.role,
      userName: capitalizeFirstLetter(userFound.userName),
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  )
  return { token: jwtToken, userId: userFound.id, role: userFound.role, userName: userFound.userName };
};

const LoginController = {
  login,
};

module.exports = LoginController;