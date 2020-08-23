const _ = require('lodash');
const memeTrend = require('./memeTrend');

memeTrend.methods(['get', 'post', 'put', 'delete']);
memeTrend.updateOptions({ new: true, runValidators: true });

memeTrend.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle;

  if (bundle.errors) {
    var errors = parseErrors(bundle.errors);
    res.status(500).json({ errors });
  } else {
    next();
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = [];
  _.forIn(nodeRestfulErrors, (error) => errors.push(error.message));
  return errors;
}

module.exports = memeTrend;
