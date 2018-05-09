import thunk from "redux-thunk";
import {createEpicMiddleware} from 'redux-observable';
import {applyMiddleware, createStore, compose} from 'redux';

import rootEpic from './epic-index';

import {reducer, initialState} from "./redux"

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configStore() {
    const middlewares = [
        epicMiddleware,
        thunk
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    const store = createStore(
        reducer,
        initialState,
        compose(...enhancers)
    );

    return store;
}
