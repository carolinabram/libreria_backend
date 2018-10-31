'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var BooksSchema = new Schema({

    'name': {
        type: String,
        require: true
    },
    'category': {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    'year': {
        type: Number

    },
    'author': {
        type: String
    },
    'rank': {
        type: [Number]
    },
    'ratings': {
        type: Schema.Types.ObjectId,
        ref: 'ratings'
    },
    'plot': {
        type: String

    },
    'editorial': {
        type: String
    },
    'pages': {
        type: String
    },
    'image': {
        type: String
    },
    url: {
        type: String
    }

}, { collection: 'books', timestamps: true });

exports.default = _mongoose2.default.model('books', BooksSchema);