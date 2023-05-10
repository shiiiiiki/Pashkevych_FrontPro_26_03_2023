"use strict";
const bind = function (fn, context, ...rest) {
  return function (...args) {
    return fn.call(context, ...rest.concat(args));
  };
};

bind();
