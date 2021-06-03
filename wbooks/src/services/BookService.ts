import { BOOKS_MOCK } from '@constants/mockBooks';

export default {
  getBooks: () => Promise.resolve({ ok: true, data: BOOKS_MOCK })
};
