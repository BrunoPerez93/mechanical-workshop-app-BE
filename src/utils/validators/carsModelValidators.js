const Yup = require("yup");

const createCarsModelSchema = () =>
  Yup.object({
    carName: Yup.string().required(),
    brandId: Yup.number().positive().required(),
  });

module.exports = {
  createCarsModelSchema,
};
