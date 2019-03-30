export const fetchItems = () => dispatch => {
    return fetch("http://localhost:3001/items")
    .then(resp => resp.json())
    .then(items =>
        dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: items })
    )
}

export const addItem = (item) => dispatch => {
    return fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(item => dispatch({ type: 'ADD_ITEM_SUCCESS', payload: item }))
}
