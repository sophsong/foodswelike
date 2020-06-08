export default function restaurantReducer(state = [], action) {

    switch (action.type) {
      case 'FETCH_RESTAURANTS':
        return [...action.payload]
     case 'SHOW_RESTAURANT':
       return {restaurants: action.payload} 
      default:
        return state
    }
  }