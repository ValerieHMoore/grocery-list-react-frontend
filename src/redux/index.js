import { combineReducers, createStore } from 'redux'
import items from './reducers/itemsReducer'

const rootReducer = combineReducers({
    items
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)