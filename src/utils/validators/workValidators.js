const Yup = require("yup");

const createWorkSchema = () =>
  Yup.object({
    brandName: Yup.string().required(),
    carName: Yup.string().required(),
    matricula: Yup.string().required(),
    km: Yup.number().required(),
    name: Yup.string().required(),
    lastname: Yup.string().required(),
    abs:  Yup.boolean().required(),
    engine: Yup.boolean().required(),
    airbag: Yup.boolean().required(),
    steer: Yup.boolean().required(),
    ta: Yup.boolean().required(),
    goodPayer: Yup.boolean().required(),
    badPayer: Yup.boolean().required(),
    normalPayer: Yup.boolean().required(),
    ci: Yup.string().required(),
    cel: Yup.number().required(),
    reclame: Yup.string().required(),
    autoParts: Yup.string().required(),
    observations: Yup.string().required(),
    userName: Yup.string().required(),
    handWork: Yup.number().required(),
    priceAutoParts: Yup.number().required(),
    total: Yup.number().required(),
  });

module.exports = {
  createWorkSchema,
};
