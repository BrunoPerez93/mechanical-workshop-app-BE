const { createUser } = require("../controllers/user.controller");
const { User } = require("../models");

const setup = async () => {
  try {
    const countUsers = await User.count();
    if (!countUsers) {
      console.info('initialSetup', 'Creating initial users');
      await createUser({
        userName: process.env.DEFAULT_USER,
        password: process.env.DEFAULT_PASSWORD,
        role: 'Admin',
      })
    }
  } catch (error) {

  }
}

module.exports = { setup };