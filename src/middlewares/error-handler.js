import BaseError from "../base-error.js";

export default function errorHandler(error, req, res, next) {
  if (error instanceof BaseError) {
    return res.status(error.statusCode).json({
      statusCode: error.statusCode,
      description: error.message,
    });
  }
}
