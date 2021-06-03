import { actions, targets } from '@redux/book/actions';
import reducer, { initialState } from '@redux/book/reducer';

const bookAction = {
  type: actions.GET_BOOKS,
  target: targets.books,
  payload: []
};

const queryAction = {
  type: actions.SET_QUERY,
  target: targets.query,
  payload: ''
};

describe('testReducer', () => {
  test('initial action', () => {
    expect(reducer(undefined, bookAction)).toEqual({
      ...initialState,
      booksLoading: true
    });
  });
  test('success action', () => {
    expect(reducer(undefined, { ...bookAction, type: actions.GET_BOOKS_SUCCESS })).toEqual(initialState);
  });
  test('failure action', () => {
    expect(reducer(undefined, { ...bookAction, type: actions.GET_BOOKS_FAILURE, payload: null })).toEqual(
      initialState
    );
  });
});

describe('testQueryActions', () => {
  test('set action', () => {
    expect(reducer(undefined, { ...queryAction, type: actions.SET_QUERY })).toEqual(initialState);
  });
});
