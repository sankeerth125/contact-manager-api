const { errors: ERROR } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : "";
  switch (statusCode) {
    case ERROR.NOT_FOUND:
      res({
        title: "Not Found",
        message: err.message,
        stacktrace: err.stack,
      });
      break;

    default:
      break;
  }
};
