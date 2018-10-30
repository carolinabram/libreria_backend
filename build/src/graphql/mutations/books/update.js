'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _books = require('../../../schemas/books');

var _books2 = _interopRequireDefault(_books);

var _books3 = require('../../types/books');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _books3.BookType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_books3.BookInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _books2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (book) {
            return _books2.default.findById(book.id).exec();
        }).catch(function (err) {
            return new Error('Couldnt update book data', err);
        });
    }
};