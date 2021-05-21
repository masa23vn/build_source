const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function incrementAsync(n) {
    return (dispatch) => {
        setTimeout(() => {
            const result = {
                type: INCREMENT_COUNTER,
                data: n + 1
            };
            dispatch(result);
        }, 1000);
    };
}

module.exports = {
    INCREMENT_COUNTER,
    incrementAsync
};
