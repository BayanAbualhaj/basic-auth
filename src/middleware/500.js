'use strict';

module.exports = (err, req, res, next) => {
  res.status(500);
  res.statusMessage = '500/Server Error :(';
  res.json({
    error: 'SERVER ERROR =(',
  });
};