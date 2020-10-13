"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";

_mongoose["default"].connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

var conection = _mongoose["default"].connection;
conection.once("open", function () {
  console.log("DB is connected");
});