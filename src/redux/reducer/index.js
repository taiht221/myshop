import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import cartReducer from './cartReducer.js';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer.js';

const middleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    user: userReducer,
  }),
  compose(applyMiddleware(...[middleware]), composeEnhancers())
);
middleware.run(rootSaga);

export default store;
