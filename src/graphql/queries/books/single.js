import * as GRAPHQL from 'graphql';

import Book from '../../../schemas/books';

import { BookType } from '../../types/books';

const querySingleBook = {

    type: BookType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const book = Book.findById(params.id).exec()
        return book
    }
}

export default querySingleBook;