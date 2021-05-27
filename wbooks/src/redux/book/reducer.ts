import { actions } from './actions';

const initialState = {
  loading: false,
  books: [],
  error: ''
};

const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, loading: true };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default booksReducer;
