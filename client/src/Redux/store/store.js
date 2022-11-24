import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
   compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;

