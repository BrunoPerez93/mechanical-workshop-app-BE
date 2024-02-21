const Yup = require("yup");

const createWorkSchema = () =>
  Yup.object({
    carModelId: Yup.number().positive().required(),
    matricula: Yup.string().required(),
    km: Yup.number().required(),
    clientId: Yup.number().positive().required(),
    abs:  Yup.boolean().required(),
    engine: Yup.boolean().required(),
    airbag: Yup.boolean().required(),
    steer: Yup.boolean().required(),
    ta: Yup.boolean().required(),
    goodPayer: Yup.boolean().required(),
    badPayer: Yup.boolean().required(),
    normalPayer: Yup.boolean().required(),
    notAccepted: Yup.boolean().required(),
    cel: Yup.number().required(),
    reclame: Yup.string().required(),
    autoParts: Yup.string().required(),
    observations: Yup.string().required(),
    mechanicId: Yup.number().positive().required(),
    handWork: Yup.number().required(),
    priceAutoParts: Yup.number().required(),
    total: Yup.number().required(),
  });

module.exports = {
  createWorkSchema,
};
