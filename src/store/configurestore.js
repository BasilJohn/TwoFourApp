import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import HomeReducer from './reducers/homereducer';
import AdReducer from './reducers/adreducer';

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    home: HomeReducer,
    ad:AdReducer
});

let composeEnhancers = compose;
if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

}
const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));
};


export default configureStore;