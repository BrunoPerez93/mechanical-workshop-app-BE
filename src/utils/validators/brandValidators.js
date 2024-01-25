const Yup = require("yup");

const createBrandSchema = () =>
  Yup.object({
    brandName: Yup.string().required(),
  });

module.exports = {
  createBrandSchema,
};
