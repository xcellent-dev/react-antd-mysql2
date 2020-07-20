'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mysql = require('mysql2');

var _mysql2 = _interopRequireDefault(_mysql);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PARSE HTML BODY

//if development environment, turn on Dev Server
var devPort = 4000;

var app = (0, _express2.default)();
var port = 3000;

_dotenv2.default.load();
/* msyql connection */
var connection = _mysql2.default.createConnection({ host: process.env.DBHOST,
    user: process.env.DBUSER, password: process.env.DBPASSWORD,
    database: process.env.DATABASE });

app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));

app.use(_bodyParser2.default.json());

/* support client-side routing */
app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

app.post('/test', function (request, response) {

    console.log(request.body);

    if (request.body.contents === "") {
        return response.status(400).json({
            error: "EMPTY CONTENTS",
            code: 2
        });
    }

    // CREATE NEW MEMO
    var question = request.body.contents.question;
    var answer = request.body.contents.answer;
    var hint = request.body.contents.hint;

    var query = 'insert into `test_table_new` (question, answer, hint) values ("' + question + '","' + answer + '", "' + hint + '")';

    connection.query(query, function (err, results, fields) {
        if (err) {
            return response.status(400).json({
                error: "CONNECTION ERROR",
                code: 2
            });
        } else {
            return response.json({ success: true });
        }
    });
});

/* handle error */
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, function () {
    console.log('listeing', port);
});

//if development environment, turn on Dev Server
if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}