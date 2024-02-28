const Yup = require("yup");

const createClientSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    lastname: Yup.string().nullable(),
    ci: Yup.string().nullable(),
    cel: Yup.number().nullable(),
  });

module.exports = {
  createClientSchema,
};
