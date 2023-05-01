"use strict";
const indexOf = function (arr, elem, fromIndex = 0) {
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
};

const lastIndexOf = function (arr, elem, fromIndex = arr.length - 1) {
  for (let i = fromIndex; i >= 0; i--) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
};

const find = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

const findIndex = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
};

const includes = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

const every = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
};

const some = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
};
