const Yup = require("yup");

const createWorkSchema = () =>
  Yup.object({
    carModelId: Yup.number().positive().required(),
    matricula: Yup.string().required(),
    km: Yup.number().nullable(),
    clientId: Yup.number().positive().required(),
    abs:  Yup.boolean(),
    engine: Yup.boolean(),
    airbag: Yup.boolean(),
    steer: Yup.boolean(),
    ta: Yup.boolean(),
    goodPayer: Yup.boolean(),
    badPayer: Yup.boolean(),
    normalPayer: Yup.boolean(),
    notAccepted: Yup.boolean(),
    reclame: Yup.string().required(),
    autoParts: Yup.string().nullable(),
    observations: Yup.string().nullable(),
    mechanicId: Yup.number().positive().nullable(),
    handWork: Yup.number().nullable(),
    priceAutoParts: Yup.number().nullable(),
    total: Yup.number().nullable(),
  });

module.exports = {
  createWorkSchema,
};
