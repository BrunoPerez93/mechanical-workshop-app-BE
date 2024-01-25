const Yup = require("yup");

const createMechanicSchema = () =>
  Yup.object({
    userName: Yup.string().required(),
    password: Yup.string().required(),
  });

module.exports = {
  createMechanicSchema,
};
