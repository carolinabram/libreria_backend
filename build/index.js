'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _categories = require('./src/schemas/categories');

var _categories2 = _interopRequireDefault(_categories);

var _users = require('./src/schemas/users');

var _users2 = _interopRequireDefault(_users);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _create = require('./src/resolvers/create');

var _verify = require('./src/resolvers/verify');

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var jsonParser = _bodyParser2.default.json();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Server WORKS on port ' + PORT);
});
_mongoose2.default.connect('mongodb://libreria:libreria1@ds243963.mlab.com:43963/libreria');
var db = _mongoose2.default.connection;
db.on('error', function () {
    return console.log("failed to connect to database");
}).once('open', function () {
    return console.log("Connected to the data base ", PORT);
});

app.use((0, _cors2.default)());

app.use('/register', jsonParser, function (req, res) {

    console.log(req.body);
    var user = new _users2.default(req.body);

    user.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send("usuario registrado");
    });
});

app.use('/login', jsonParser, function (req, res) {
    if (req.method === 'POST') {
        var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
            res.status(200).json({ token: token });
        }).catch(function (err) {
            console.log(err);
            res.status(403).json({
                message: 'Login Failed, INVALID CREDENTIALS'
            });
        });
    }
});

app.use('/verifyToken', jsonParser, function (req, res) {
    if (req.method === 'POST') {
        try {
            var token = req.headers['authorization'];
            (0, _verify.verifyToken)(token).then(function (user) {
                res.status(200).json({ user: user });
                console.log(user);
            }).catch(function (err) {
                console.log(err);
            });
        } catch (e) {
            console.log(e.message);
            res.status(401).json({
                message: e.message
            });
        }
    }
});

////             MIDDLEWARE
app.use('/graphql', function (req, res, next) {
    var token = req.headers['authorization'];
    try {
        req.user = (0, _verify.verifyToken)(token);
        next();
    } catch (er) {
        res.status(401).json({
            message: er.message
        });
    }
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true,
        pretty: true,

        context: {
            user: req.user
        }
    };
}));