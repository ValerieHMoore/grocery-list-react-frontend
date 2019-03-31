const initialState = {
    items: [],
    item: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS_SUCCESS':
            return {...state, items: action.payload}
        
        case 'FETCH_ITEM_SUCCESS':
            return {...state, item: action.payload}
        
        case 'ADD_ITEM_SUCCESS':
            return {...state, item: action.payload}

        default:
            return state
    }
}