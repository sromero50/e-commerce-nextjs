const initialState = {
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                products: action.payload.products,
            };

        case 'COUNTER_DECRIMENT':
            return {
                count: state.count - 1,
            };

        default: return state;
    }
};

export default reducer;