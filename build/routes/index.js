'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use('/card', _Card2.default);

exports.default = router;