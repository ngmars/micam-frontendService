import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import Files from './files/reducer';
import Video from './videos/reducer';
export default combineReducers({
    Auth,
    Files,
    Video
});
