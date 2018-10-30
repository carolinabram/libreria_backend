import Book from '../../../schemas/books';
import {BookType,BookInputType } from '../../types/books';
import * as graphql from 'graphql';


export default {

    type:BookType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(BookInputType)
        }
    },
    resolve(root,params){
        const book  = new Book(params.data)
        const newBook = book.save();
        if(!newBook) throw new Error("Problema al crear book")
        return newBook
    }


}