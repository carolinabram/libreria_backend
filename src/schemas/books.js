import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const BooksSchema = new Schema({

    'name' : {
        type: String,
        require: true
    },
    'category': {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    'year': {
        type: Number,

    },
    'author': {
        type: String,
    },
    'rank': {
        type: [Number]
    },
    'ratings': {
        type: Schema.Types.ObjectId,
        ref: 'ratings'
    },
    'plot': {
        type: String,
    
    },
    'editorial': {
        type: String,
    },
    'pages': {
        type: String,
    },
    'image': {
        type: String
    },
    url: {
        type: String
    }

    
    
},{collection: 'books', timestamps: true});

export default mongoose.model('books', BooksSchema);