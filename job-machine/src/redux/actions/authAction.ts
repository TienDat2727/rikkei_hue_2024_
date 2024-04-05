import {
  LogoutAction,
  RegisterFailureAction,
  RegisterSuccessAction,
} from './../../interfaces/index';
import {
  AuthActionTypes,
  LoginFailureAction,
  LoginRequestAction,
  LoginSuccessAction,
  RegisterRequestAction,
  User,
  registerUser,
} from '../../interfaces';

export const loginRequest = (
  email: string,
  password: string
): LoginRequestAction => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (user: registerUser): LoginSuccessAction => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error: string): LoginFailureAction => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const registerRequest = (user: registerUser): RegisterRequestAction => ({
  type: AuthActionTypes.REGISTER_REQUEST,
  payload: user,
});

export const registerSuccess = (user: registerUser): RegisterSuccessAction => ({
  type: AuthActionTypes.REGISTER_SUCCESS,
  payload: user,
});

export const registerFail = (error: string): RegisterFailureAction => ({
  type: AuthActionTypes.REGISTER_FAILURE,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT,
});
