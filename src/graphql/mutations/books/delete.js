import Book from '../../../schemas/books';
import {BookType} from '../../types/books';
import * as graphql from 'graphql';

export default {

    type:BookType,
    args:{
        id:{
            name:'ID',
            type:new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedBook = Book.findByIdAndRemove(params.id).exec()
        if(!deletedBook) throw Error("Error on delete book")
        return deletedBook
                        
    }


}