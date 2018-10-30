import * as GRAPHQL from 'graphql';
import Book from '../../../schemas/books';
import { BookType, RankBookType } from '../../types/books';

export default {
    type: BookType,
    args:{
        id:{
            name:'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        data:{
            name:"data",
            type: GRAPHQL.GraphQLNonNull(RankBookType)
        }
    },resolve(root,params){
        const {id,data} = params
        console.log(data)
        return Book.findByIdAndUpdate(id,{$push:{rank:data.rank}})
            .then((movie)=>{
                return Book.findById(movie.id).exec()
                
            })
    }
}