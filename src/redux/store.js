import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { fork, all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import home from './home/saga';
import rootReducers from './rootReducers';
const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    fork(home),

  ]);
}
export default function configureStore() {
  const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
