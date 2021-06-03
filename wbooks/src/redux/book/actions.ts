import { getBooks } from '@services/BookService';
import { createTypes, completeTypes } from 'redux-recompose';

const completedActions = completeTypes({ primaryActions: ['GET_BOOKS', 'SET_QUERY'] });

export const actions = createTypes(completedActions, '@@BOOK');

const target = 'books';

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target,
    service: getBooks
  }),
  setQuery: (query: string) => ({
    type: actions.SET_QUERY,
    target: 'query',
    payload: query
  })
};

export default actionCreators;
