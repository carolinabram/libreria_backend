import Book from '../../../schemas/books';
import {BookType,BookInputType} from '../../types/books';
import * as graphql from 'graphql';


export default {

    type:BookType,
    args:{
        id:{
            name:'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(BookInputType)
        }
    },
    resolve(root,params){
        return Book.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((book) => Book.findById(book.id).exec())
                        .catch((err) => new Error ('Couldnt update book data',err))
    }
}