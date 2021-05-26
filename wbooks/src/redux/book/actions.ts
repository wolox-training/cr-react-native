import { BOOKS_MOCK } from '@constants/mockBooks';

export const getBooks = () => ({
  type: 'GET_BOOKS',
  payload: BOOKS_MOCK
});
