const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS_SUCCESS':
            return action.payload
        default:
            return state
    }
}