import * as GRAPHQL from 'graphql';

import Book from '../../../schemas/books';
import { BookType } from '../../types/books';


const queryAllBooks = {
    type : new GRAPHQL.GraphQLList(BookType),
    resolve(){
        const books = Book.find().exec()
        if(!books) throw new Error("Error at fetching books");
        return books
    }
}

export default queryAllBooks;