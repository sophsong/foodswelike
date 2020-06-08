//combineReducers

import {combineReducers} from 'redux'
import restaurantReducer from './restaurantReducer'
import customerReducer from './customerReducer'
export default combineReducers({
    restaurants: restaurantReducer,
    customers: customerReducer
});
//take each reducer as an object