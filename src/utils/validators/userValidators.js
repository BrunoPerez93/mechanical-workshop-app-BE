const Yup = require("yup");

const createUserSchema = () =>
  Yup.object({
    role: Yup.string().oneOf(['Admin', 'Management', 'Mechanic'])
      .required(),
    userName: Yup.string().required(),
    password: Yup.string().required(),
  });

module.exports = {
  createUserSchema,
};
