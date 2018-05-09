import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {combine} from 'redux-scaffold';

//import epic
import listing from "../epic-listing";

//create root reducer
export const reducer = combineReducers({
    routing: routerReducer,
    "listing": combine(listing.Reducer)
});

// create initial state
export const initialState = {
    "listing": listing.INITIAL_STATE
};
