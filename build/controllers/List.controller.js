"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteListById = exports.updateListById = exports.createList = exports.getLists = void 0;

var _Lists = _interopRequireDefault(require("../models/Lists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getLists = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var lists;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Lists["default"].find();

          case 2:
            lists = _context.sent;
            res.json(lists);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getLists(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getLists = getLists;

var createList = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, fields, users, list, listSaved;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, fields = _req$body.fields, users = _req$body.users;
            list = new _Lists["default"]({
              name: name,
              fields: fields,
              users: users
            });
            _context2.next = 4;
            return list.save();

          case 4:
            listSaved = _context2.sent;
            res.status(201).json(listSaved);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createList = createList;

var updateListById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var list;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Lists["default"].findByIdAndUpdate(req.params.listId, req.body, {
              "new": true
            });

          case 2:
            list = _context3.sent;
            res.json(list);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateListById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateListById = updateListById;

var deleteListById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Lists["default"].findByIdAndDelete(req.params.listId);

          case 2:
            res.json('deleted successfully');

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteListById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteListById = deleteListById;