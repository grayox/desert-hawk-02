import * as reduxModule from 'redux';
import {applyMiddleware, compose, createStore} from 'redux';
import createReducer from 'store/reducers';
import thunk from 'redux-thunk';

// begin insert from marioplan
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig'
import fbConfig from './my-app/config/fbConfig'
// end insert from marioplan

// begin insert from react-redux-firebase
import firebase from 'firebase'
// http://react-redux-firebase.com/docs/v2-migration-guide.html
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true
}
// initialize firebase instance
firebase.initializeApp(fbConfig) // <- new to v2.*.*
// firebase.firestore() // <- needed if using firestore
const firestore = firebase.firestore();
const settings = {
  // your settings...
  timestampsInSnapshots: true
};
firestore.settings(settings);
// end insert from react-redux-firebase

/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
*/
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk)
    // begin insert from marioplan
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    // reduxFirestore(fbConfig) // redux bindings for firestore
    // end insert from marioplan

    // begin insert from react-redux-firebase
    // http://react-redux-firebase.com/docs/v2-migration-guide.html
    reactReduxFirebase(firebase, rrfConfig), // pass in firebase instance instead of config
    reduxFirestore(firebase) // <- needed if using firestore
    // applyMiddleware(...middleware) // to add other middleware
    // end insert from react-redux-firebase
);

const store = createStore(createReducer(), enhancer);

// per marioplan:
// const store = createStore(rootReducer,
//   compose(

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
    if ( store.asyncReducers[key] )
    {
        return;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
};

export default store;
