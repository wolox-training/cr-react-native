import { Dispatch } from 'redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

export const actions = {
  GET_BOOKS: '@@BOOK/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOK/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOK/GET_BOOKS_FAILURE'
};

const actionCreators = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS, isFetching: true });
    const response = { ok: true, data: BOOKS_MOCK, error: '' };
    if (response.ok) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        isFetching: false,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_BOOKS_FAILURE,
        isFetching: false,
        payload: response.error
      });
    }
  }
};

export default actionCreators;
