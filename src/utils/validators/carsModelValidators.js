const Yup = require("yup");

const createCarsModelSchema = () =>
  Yup.object({
    carName: Yup.string().required(),
  });

module.exports = {
  createCarsModelSchema,
};
