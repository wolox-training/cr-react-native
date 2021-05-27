import Book from '@interfaces/book';

export type LibraryStackParamList = {
  Login: undefined;
  Library: undefined;
  BookDetail: Book;
};

export type TabBarParamList = {
  BookList: undefined;
  Settings: undefined;
};
