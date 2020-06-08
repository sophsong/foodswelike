export function fetchRestaurants() {
    
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/restaurants', {
          method: "GET"
        })
        .then(res => res.json())
        .then(restaurants =>
          dispatch({
            type: 'FETCH_RESTAURANTS',
            payload: restaurants
          }),
        )
    }
  } //end of function

// export function fetchRestaurants(restaurants) {
//     return {type: "FETCH_RESTAURANTS", payload: restaurants}
// }


