import users from './users';
import categories from './categories';
import ratings from './ratings';
import books from './books';


export default {
    ...users,
    ...categories,
    ...ratings,
    ...books
}