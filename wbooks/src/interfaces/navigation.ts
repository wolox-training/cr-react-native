import Book from '@interfaces/book';

export type LibraryStackParamList = {
  BookList: undefined;
  BookDetail: Book;
  SearchFilter: undefined;
};

export type TabBarParamList = {
  Library: undefined;
  Settings: undefined;
};
