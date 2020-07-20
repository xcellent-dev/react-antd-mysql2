'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
	ACCOUNT SIGNUP: POST /api/account/signup
	BODY SAMPLE: {"username":"test", "password":"test"}
	ERROR CODES:
		1: BAD USERNAME
		2: BAD PASSWORD
		3: USERNAME EXISTS
*/

router.post('/addCard', function (req, res) {
	return res.json({ success: true });
});

exports.default = router;