import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import items from './reducers/itemsReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    items
})

export default createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(thunk)
    )
  )