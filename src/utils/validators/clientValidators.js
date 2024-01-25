const Yup = require("yup");

const createClientSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    lastname: Yup.string().required(),
    ci: Yup.string().required(),
  });

module.exports = {
  createClientSchema,
};