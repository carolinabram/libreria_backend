import * as GRAPHQL from 'graphql';

import { CategoryType } from './categories';
import { RatingType } from './ratings';

import Category from '../../schemas/categories';
import Rating from '../../schemas/ratings';

export const BookType = new GRAPHQL.GraphQLObjectType({
    name: 'Books',
    description: 'Types of Books',
    fields : () => ({
        _id:{
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name : {
            type : GRAPHQL.GraphQLString
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
        plot : {
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
            type: RatingType,
            resolve(book){
                const {rating} = book
                return Rating.findById(rating).exec()
            }
        },
        category: {
            type: CategoryType,
            resolve(book){
                const {category} = book
                return Category.findById(category).exec()
            }
        }

        
    })
})
export const BookInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'AddBooks',
    description: 'Types of Books',
    fields : () => ({
        name : {
            type : GRAPHQL.GraphQLString
        },
        year: {
            type: GRAPHQL.GraphQLString
        },
        author: {
            type: GRAPHQL.GraphQLString
        },
        plot : {
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

        
    })
})

export const RankBookType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addRank',
    description: 'Add rank to book',
    fields: () =>({
        rank:{
            type:GRAPHQL.GraphQLFloat
        }
    })
})
