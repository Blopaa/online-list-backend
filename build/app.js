"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //settings

app.set('port', process.env.PORT || 4000); //middlewares

app.use((0, _cors["default"])());
app.use(_express["default"].json()); //routes

var _default = app;
exports["default"] = _default;