import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import bookService from '@services/BookService';
import { BOOKS_MOCK } from '@constants/mockBooks';
import actionCreators, { actions, targets } from '@redux/book/actions';

const mockStore = configureMockStore([thunk, fetchMiddleware]);
const store = mockStore({ book: { books: [], query: '' } });

describe('testBookAction', () => {
  afterEach(() => {
    store.clearActions();
  });
  test('books success', async () => {
    bookService.getBooks = jest.fn().mockImplementation(() => ({ ok: true, data: BOOKS_MOCK }));

    await store.dispatch(actionCreators.getBooks());
    expect(store.getActions()).toEqual([
      {
        target: targets.books,
        type: actions.GET_BOOKS
      },
      {
        target: targets.books,
        type: actions.GET_BOOKS_SUCCESS,
        payload: BOOKS_MOCK
      }
    ]);
  });
  test('books failure', async () => {
    const problem = { message: 'Bad request', status: 500 };
    bookService.getBooks = jest.fn().mockImplementation(() => ({ ok: false, problem }));

    await store.dispatch(actionCreators.getBooks());
    expect(store.getActions()).toEqual([
      {
        target: targets.books,
        type: actions.GET_BOOKS
      },
      {
        target: targets.books,
        type: actions.GET_BOOKS_FAILURE,
        payload: problem
      }
    ]);
  });
  test('Set query', () => {
    const query = 'random text';
    store.dispatch(actionCreators.setQuery(query));
    expect(store.getActions()).toEqual([
      {
        target: targets.query,
        type: actions.SET_QUERY,
        payload: query
      }
    ]);
  });
});
