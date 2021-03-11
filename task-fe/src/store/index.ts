import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createReduxSagaMiddleware from 'redux-saga';
import { authReducer, rootAuthSaga } from './auth';
import { rootTasksSaga, tasksReducer } from './tasks';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const sagaMiddleware = createReduxSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootAuthSaga);
sagaMiddleware.run(rootTasksSaga)

export default store