import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createReduxSagaMiddleware from 'redux-saga';
import { authReducer, rootAuthSaga } from './auth';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const sagaMiddleware = createReduxSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootAuthSaga);

export default store