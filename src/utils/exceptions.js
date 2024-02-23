/* istanbul ignore file */

class BaseError extends Error {
  toJSON() {
    const values = { ...this };
    delete values.name;
    delete values.status;
    delete values.details;
    delete values.isOperational;
    return values;
  }
}

class DomainError extends BaseError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequest extends DomainError {
  constructor(error, resource) {
    super(`Bad Request.`);
    this.status = 400;
    this.error = error;
    this.resource = resource;
  }
}

class LoginError extends DomainError {
  constructor(message) {
    super(message);
    this.status = 401;
    this.error = 'Unauthorized';
  }
}

class AuthorizationError extends DomainError {
  constructor(message) {
    super(message);
    this.status = 403;
    this.error = 'Forbidden';
  }
}

class DatabaseError extends BaseError {
  constructor(error) {
    super();
    this.status = 500;
    this.name = "DB";
    this.error = "Query error";
    this.isOperational = true;
    this.details = error;
    Error.captureStackTrace(this, this.constructor);
  }
}

const Errors = {
  badFormat: {
    code: 100,
    msg: "The input doesn't have the correct format",
  },
  thirdPartyError: {
    code: 101,
    msg: "Third party HTTP request failed.",
  },
  databaseCreation: {
    code: 102,
    msg: "Creation on database failed",
  },
  credentialsError: {
    code: 103,
    msg: "Wrong username or password",
  },
  duplicated: {
    code: 104,
    msg: "Duplicated item",
  }
};

module.exports = {
  DomainError,
  BadRequest,
  DatabaseError,
  LoginError,
  AuthorizationError,
  Errors,
};
