'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _books = require('../../../schemas/books');

var _books2 = _interopRequireDefault(_books);

var _books3 = require('../../types/books');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryAllBooks = {
    type: new GRAPHQL.GraphQLList(_books3.BookType),
    resolve: function resolve() {
        var books = _books2.default.find().exec();
        if (!books) throw new Error("Error at fetching books");
        return books;
    }
};

exports.default = queryAllBooks;