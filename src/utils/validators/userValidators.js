const Yup = require("yup");

const createUserSchema = () =>
  Yup.object({
    role: Yup.string().oneOf(['Admin', 'Operation', 'Mechanic'])
      .required(),
    userName: Yup.string().required(),
    password: Yup.string().required(),
  });

module.exports = {
  createUserSchema,
};
