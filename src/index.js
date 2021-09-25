import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';



import {createStore , applyMiddleware,  compose} from 'redux';

import {rootReducer} from './store/reducer/rootReducer';
import {Provider, ReactReduxContext} from 'react-redux';
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'

import fbConfig from './config/fbConfig';



export const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig , {useFirestoreForProfile: true, userProfile: 'users' })
)
);




ReactDOM.render(<Provider store= {store}><App /></Provider> , document.getElementById('root'));




serviceWorker.unregister();












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




