import { BOOKS_MOCK } from '@constants/mockBooks';

export const getBooks = () => Promise.resolve({ ok: true, data: BOOKS_MOCK, error: '' });
