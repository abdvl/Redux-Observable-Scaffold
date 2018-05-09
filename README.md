# redux-observable-scaffold
Simplify redux boilerplate code when using redux-observable.

There are too much boilerplate code in react&redux project.

Simplify the action &reducer creation and fully utlize [redux-observable](https://github.com/redux-observable/redux-observable) and [rx.js](https://github.com/ReactiveX/rxjs)

The creation of action and redux could be this simple:

```js
import 'rxjs';
import {create} from 'redux-scaffold';

const INITIAL_STATE = {
    state: "Complete",
    data: []
};

export let {Types, Actions, Reducer} = create(INITIAL_STATE, {
    "update_listing_state": ["state"],
    "update_listing_data": ["data"]
});

export default {Types, Actions, Reducer, INITIAL_STATE}
```

And 
```js
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
```
