import { actions, targets } from '@redux/auth/actions';
import reducer, { initialState } from '@redux/auth/reducer';

const loginAction = {
  type: actions.LOGIN,
  target: targets.responseAPI,
  payload: {}
};

const userAction = {
  type: actions.SET_CURRENT_USER,
  target: targets.currentUser,
  payload: null
};

describe('testReducer', () => {
  test('initial action', () => {
    expect(reducer(undefined, loginAction)).toEqual({
      ...initialState,
      responseAPILoading: true
    });
  });
  test('success action', () => {
    expect(reducer(undefined, { ...loginAction, type: actions.LOGIN_SUCCESS })).toEqual(initialState);
  });
  test('failure action', () => {
    expect(reducer(undefined, { ...loginAction, type: actions.LOGIN_FAILURE, payload: null })).toEqual(
      initialState
    );
  });
});

describe('testUserActions', () => {
  test('set action', () => {
    expect(reducer(undefined, { ...userAction, type: actions.SET_CURRENT_USER })).toEqual(initialState);
  });
});
