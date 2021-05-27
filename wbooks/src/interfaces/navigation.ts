import Book from '@interfaces/book';

export type LibraryStackParamList = {
  BookList: undefined;
  BookDetail: Book;
};

export type TabBarParamList = {
  Login: undefined;
  Library: undefined;
  Settings: undefined;
};
