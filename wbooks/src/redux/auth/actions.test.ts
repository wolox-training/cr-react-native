import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import authService from '@services/AuthService';
import actionCreators, { actions, targets } from '@redux/auth/actions';

const mockStore = configureMockStore([thunk, fetchMiddleware]);
const store = mockStore();

const mockData = { email: 'cristian.romero@wolox.co', password: '12345678' };

describe('testBookAction', () => {
  afterEach(() => {
    store.clearActions();
  });
  test('login success', async () => {
    authService.login = jest.fn().mockImplementation(() => ({
      ok: true,
      data: {
        headers: { uid: mockData.email, token: 'AE12OI45PK56LK', client: 'secret_variable' },
        currentUser: mockData.email
      }
    }));

    await store.dispatch(actionCreators.login(mockData.email, mockData.password));
    expect(store.getActions()).toEqual([
      {
        target: targets.responseAPI,
        type: actions.LOGIN
      },
      {
        target: targets.responseAPI,
        type: actions.LOGIN_SUCCESS,
        payload: {
          headers: { uid: mockData.email, token: 'AE12OI45PK56LK', client: 'secret_variable' },
          currentUser: mockData.email
        }
      }
    ]);
  });
  test('login failure', async () => {
    const problem = { message: 'User does not exist', status: 404 };
    authService.login = jest.fn().mockImplementation(() => ({ ok: false, problem }));

    await store.dispatch(actionCreators.login(mockData.email, mockData.password));
    expect(store.getActions()).toEqual([
      {
        target: targets.responseAPI,
        type: actions.LOGIN
      },
      {
        target: targets.responseAPI,
        type: actions.LOGIN_FAILURE,
        payload: problem
      }
    ]);
  });
  test('Set current user', () => {
    const user = 'cristian.romero@wolox.co';
    store.dispatch(actionCreators.setCurrentUser(user));
    expect(store.getActions()).toEqual([
      {
        target: targets.currentUser,
        type: actions.SET_CURRENT_USER,
        payload: user
      }
    ]);
  });
});
