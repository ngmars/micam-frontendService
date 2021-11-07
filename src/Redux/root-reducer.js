import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import Files from './files/reducer'
export default combineReducers({
    Auth,
    Files
});
