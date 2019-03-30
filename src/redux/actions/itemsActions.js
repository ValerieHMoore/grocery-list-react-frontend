export const fetchItems = () => dispatch => {
    return fetch("http://localhost:3001/items")
    .then(resp => resp.json())
    .then(items =>
        dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: items })
    )
}

