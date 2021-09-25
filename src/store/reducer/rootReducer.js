import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers}  from 'redux';
import {firestoreReducer} from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import userReducer from '../../redux/reducers/userReducer';
import dataReducer from '../../redux/reducers/dataReducer';
import uiReducer from '../../redux/reducers/uiReducer';


 export const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  user: userReducer,
  data: dataReducer,
  UI: uiReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer