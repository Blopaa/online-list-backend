"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var listSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fields: {
    type: Array,
    "default": [{
      thing: {
        type: String
      },
      doit: {
        type: Boolean
      },
      much: {
        type: Number
      }
    }]
  },
  users: {
    type: Object,
    required: true,
    "default": {
      author: {
        type: String,
        required: true
      },
      allowedUsers: {
        type: Array
      }
    }
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("List", listSchema);

exports["default"] = _default;