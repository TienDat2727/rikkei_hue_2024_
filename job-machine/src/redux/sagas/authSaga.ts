// sagas.js
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  loginFail,
  loginSuccess,
  registerFail,
  registerSuccess,
} from '../actions/authAction';
import { LoginSuccessAction, RegisterSuccessAction } from '../../interfaces';
import { fakeCallApi, fakeCallApiRegister } from '../../helper';
import { SagaIterator } from 'redux-saga';

function* loginSaga(action: LoginSuccessAction): SagaIterator {
  try {
    const { email, password } = action.payload;
    const response = yield call(fakeCallApi, { email, password });
    const user = response.data;
    yield put(loginSuccess(user));
  } catch (error: any) {
    yield put(loginFail(error.message));
  }
}

function* registerSaga(action: RegisterSuccessAction): SagaIterator {
  try {
    const { username, email, password } = action.payload;
    const response = yield call(fakeCallApiRegister, {
      username,
      email,
      password,
    });
    const user = response.data;
    yield put(registerSuccess(user));
  } catch (error: any) {
    yield put(registerFail(error.message));
  }
}

function* authSaga() {
  yield takeLatest('LOGIN_REQUEST', loginSaga);
  yield takeLatest('REGISTER_REQUEST', registerSaga);
}

export default authSaga;
