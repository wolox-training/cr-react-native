import { actions } from './actions';

const initialState = {
  isFetching: false,
  books: [],
  error: ''
};

const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, isFetching: true };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: action.payload
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default booksReducer;
