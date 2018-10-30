import Users from './users';
import Categories from './categories';
import Ratings from './ratings';
import Books from './books';


export default {
    ...Users,
    ...Categories,
    ...Ratings,
    ...Books
}