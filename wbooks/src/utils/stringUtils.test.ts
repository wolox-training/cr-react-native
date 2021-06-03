import { getInitials, keepNumbers } from './stringUtils';

describe('getInitials testing', () => {
  test('Initials of a name', () => {
    expect(getInitials('Richard Feynman')).toEqual('R F');
  });
  test('Initials of an empty string', () => {
    expect(getInitials('')).toEqual('');
  });
  test('When string is undefined', () => {
    expect(getInitials(undefined)).toBeUndefined();
  });
});

describe('keepNumbers testing', () => {
  test('When is type number', () => {
    expect(keepNumbers(12345)).toEqual('12345');
  });
  test('When the number is with characters', () => {
    expect(keepNumbers('ABC1 2345')).toEqual('12345');
  });
  test('String of numbers', () => {
    expect(keepNumbers('12345')).toEqual('12345');
  });
  test('Undefined', () => {
    expect(keepNumbers(undefined)).toEqual('');
  });
});
