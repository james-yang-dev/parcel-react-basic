import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchTodo(action) {
  try {
    const todo = yield 'new todo yay';
    yield put({ type: 'ADD_TODO', todo });
  } catch (e) {
    yield put({ type: 'ADD_TODO', message: e.message });
  }
}

export function* helloSaga() {
  console.log('heelo saga');
}
