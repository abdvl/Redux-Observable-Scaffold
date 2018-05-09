import {combineEpics} from 'redux-observable';
import {updateList} from './epic-listing';

export default combineEpics(updateList);
