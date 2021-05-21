import { INCREMENT_COUNTER } from './action';

const appReducer = (state = { number: 1 }, action) => {
    const data = action?.data;
    const type = action?.type;
    switch (type) {
        case INCREMENT_COUNTER: {
            return { ...state, number: data };
        }
        default:
            return state;
    }
};

export default appReducer;
