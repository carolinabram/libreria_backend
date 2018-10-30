'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RankBookType = exports.BookInputType = exports.BookType = undefined;

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _categories = require('./categories');

var _ratings = require('./ratings');

var _categories2 = require('../../schemas/categories');

var _categories3 = _interopRequireDefault(_categories2);

var _ratings2 = require('../../schemas/ratings');

var _ratings3 = _interopRequireDefault(_ratings2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var BookType = exports.BookType = new GRAPHQL.GraphQLObjectType({
    name: 'Books',
    description: 'Types of Books',
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            name: {
                type: GRAPHQL.GraphQLString
            },
            year: {
                type: GRAPHQL.GraphQLString
            },
            author: {
                type: GRAPHQL.GraphQLString
            },
            rank: {
                type: GRAPHQL.GraphQLList(GRAPHQL.GraphQLFloat)
            },
            plot: {
                type: GRAPHQL.GraphQLString
            },
            editorial: {
                type: GRAPHQL.GraphQLString
            },
            length: {
                type: GRAPHQL.GraphQLString
            },
            image: {
                type: GRAPHQL.GraphQLString
            },
            url: {
                type: GRAPHQL.GraphQLString
            },
            rating: {
                type: _ratings.RatingType,
                resolve: function resolve(book) {
                    var rating = book.rating;

                    return _ratings3.default.findById(rating).exec();
                }
            },
            category: {
                type: _categories.CategoryType,
                resolve: function resolve(book) {
                    var category = book.category;

                    return _categories3.default.findById(category).exec();
                }
            }

        };
    }
});
var BookInputType = exports.BookInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'AddBooks',
    description: 'Types of Books',
    fields: function fields() {
        return {
            name: {
                type: GRAPHQL.GraphQLString
            },
            year: {
                type: GRAPHQL.GraphQLString
            },
            author: {
                type: GRAPHQL.GraphQLString
            },
            plot: {
                type: GRAPHQL.GraphQLString
            },
            editorial: {
                type: GRAPHQL.GraphQLString
            },
            pages: {
                type: GRAPHQL.GraphQLString
            },
            image: {
                type: GRAPHQL.GraphQLString
            },
            url: {
                type: GRAPHQL.GraphQLString
            },
            rating: {
                type: GRAPHQL.GraphQLString
            },
            category: {
                type: GRAPHQL.GraphQLString
            }

        };
    }
});

var RankBookType = exports.RankBookType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addRank',
    description: 'Add rank to book',
    fields: function fields() {
        return {
            rank: {
                type: GRAPHQL.GraphQLFloat
            }
        };
    }
});