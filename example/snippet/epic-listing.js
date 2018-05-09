import 'rxjs';
import {create} from 'redux-scaffold';

//
const INITIAL_STATE = {
    state: "Complete",
    data: []
};


export let {Types, Actions, Reducer} = create(INITIAL_STATE, {
    "update_listing_state": ["state"],
    "update_listing_data": ["data"]
});

// overwrite an action
Actions["update_listing_state"] = (arg) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_LISTING_STATE",
            payload: arg
        })
    }
};

//overwrite a reducer
Reducer["update_listing_state"] = (init, action) => {
    if (action.type == "UPDATE_LISTING_STATE") {
        return {...init, "state": action.payload}
    } else {
        return init;
    }
};

// Observable
export function updateList(action$) {
    return action$.ofType("UPDATE_LISTING_STATE")
        .delay(1000)
        .map(x => ({
            type: "UPDATE_LISTING_DATA",
            payload: [1, 2, 3, 4],
        }))
}


export default {Types, Actions, Reducer, INITIAL_STATE}

