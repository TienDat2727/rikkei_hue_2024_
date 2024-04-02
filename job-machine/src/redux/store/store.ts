import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
