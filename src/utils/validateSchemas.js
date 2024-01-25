const { BadRequest, Errors } = require("./exceptions");

const validateBodyMW = (resourceSchema) => async (req, _, next) => {
  const { body } = req;
  const schema =
    typeof resourceSchema === "function" ? resourceSchema() : resourceSchema; // TODO: is it necessary here?
  try {
    await schema.noUnknown().validate(body, { strict: true });

    next();
  } catch (error) {
    next(
      new BadRequest({ ...Errors.badFormat, msg: error.message }, [
        error.path ||
          (typeof error.params?.unknown === "string"
            ? error.params.unknown.split(", ")
            : ""),
      ])
    );
  }
};

module.exports = {
  validateBodyMW,
};
