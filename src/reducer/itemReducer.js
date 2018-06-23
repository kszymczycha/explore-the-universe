const initialState = {
    items: [],
    submit: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                items: action.payload,
                submit: true
            }
        default: 
            return state;
    }
}

export default reducer;

