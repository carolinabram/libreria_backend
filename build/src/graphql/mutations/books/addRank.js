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

exports.default = {
    type: _books3.BookType,
    args: {
        id: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        data: {
            name: "data",
            type: GRAPHQL.GraphQLNonNull(_books3.RankBookType)
        }
    }, resolve: function resolve(root, params) {
        var id = params.id,
            data = params.data;

        console.log(data);
        return _books2.default.findByIdAndUpdate(id, { $push: { rank: data.rank } }).then(function (movie) {
            return _books2.default.findById(movie.id).exec();
        });
    }
};