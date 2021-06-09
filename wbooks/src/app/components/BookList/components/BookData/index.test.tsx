import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
// import store from '@redux/store';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Book from '@interfaces/book';

import BookData from './index';

jest.mock('@react-navigation/native');

const book: Book = {
  id: 2,
  author: 'Lois Duncan',
  title: 'Locked in time',
  genre: 'suspense',
  publisher: 'Little, Brown',
  year: '1985',
  imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'
};

const mockStore = configureMockStore([thunk]);
const store = mockStore({ book: { books: [] }, auth: { currentUser: '' } });

const MockBookData = (
  <Provider store={store}>
    <BookData {...book} />
  </Provider>
);

describe('BookData', () => {
  test('Show data book', () => {
    const { getByText } = render(MockBookData);
    const title = getByText(book.title);
    const author = getByText(book.author);
    expect([title, author]).toBeDefined();
  });

  test("Don't show book id", () => {
    const { queryByText } = render(MockBookData);
    expect(queryByText(`${book.id}`)).toBeNull();
  });
});
