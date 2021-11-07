import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import fileSaga from './files/saga';
import videoSaga from './videos/saga';
export default function* rootSaga(getState) {
  yield all([authSaga(),fileSaga()]);
}
