const initialState = {
  books: []
};

const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
