import Book from '@interfaces/book';

const initialState: Book[] = [];

const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
