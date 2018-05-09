export const create = (initialState, config) => {

    // generate Actions
    const Actions = Object.keys(config).reduce((acm, key) => {
        const value = config[key];
        acm[key] = value[1] ? value[1] : function (arg) {
            return {"type": key.toUpperCase(), "payload": arg}
        };

        return acm;
    }, {});

    // generate Reducer
    const Reducer = Object.keys(config).reduce((acm, key) => {
        const value = config[key];
        acm[key] = (state = initialState, action) => {
            if (action.type === key.toUpperCase()) {
                return {...state, [value[0]]: action.payload}
            } else {
                return state;
            }
        };

        return acm;
    }, {});

    // generate Types
    const Types = Object.keys(Actions).map(key => key.toUpperCase());

    return {Types, Actions, Reducer}


};

export const combine = reducers => {
    return function (initialState, action) {
        return Object.keys(reducers).reduce((state, key) => {
            return reducers[key].call(null, state, action)
        }, initialState);
    }
};
