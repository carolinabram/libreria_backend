'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        }
    },
    resolve: function resolve(root, params) {
        var deletedBook = _books2.default.findByIdAndRemove(params.id).exec();
        if (!deletedBook) throw Error("Error on delete book");
        return deletedBook;
    }
};