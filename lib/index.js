"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = require("./api");

var api = {
  getUsers: _api.getUsers,
  getBooks: _api.getBooks,
  createBook: _api.createBook,
  updateBook: _api.updateBook
};
var _default = api;
exports.default = _default;