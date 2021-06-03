import bookService from '@services/BookService';
import { createTypes, completeTypes } from 'redux-recompose';

const completedActions = completeTypes({ primaryActions: ['GET_BOOKS', 'SET_QUERY'] });

export const actions = createTypes(completedActions, '@@BOOK');

export const targets = { books: 'books', query: 'query' };

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: targets.books,
    service: bookService.getBooks
  }),
  setQuery: (query: string) => ({
    type: actions.SET_QUERY,
    target: targets.query,
    payload: query
  })
};

export default actionCreators;
