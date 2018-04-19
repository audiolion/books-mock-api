"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getBooks = getBooks;
exports.createBook = createBook;
exports.updateBook = updateBook;

var _database = require("./_database.js");

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toArray(dict) {
  return Object.keys(dict).map(function (key) {
    return _objectSpread({}, dict[key]);
  });
}

function getUsers() {
  return _getUsers2.apply(this, arguments);
}

function _getUsers2() {
  _getUsers2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _database._getUsers)().then(function (users) {
              return toArray(users);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getUsers2.apply(this, arguments);
}

function getBooks() {
  return (0, _database._getBooks)().then(function (books) {
    return toArray(books);
  });
}

function createBook(book) {
  return (0, _database._createBook)(book).then(function (b) {
    return b;
  });
}

function updateBook(book) {
  return (0, _database._updateBook)(book).then(function (b) {
    return b;
  });
}