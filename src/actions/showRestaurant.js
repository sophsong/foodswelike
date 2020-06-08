export function showRestaurant(restaurant){

    return (dispatch) => {
       fetch(`http://localhost:3000/api/v1/restaurants/${restaurant.id}`)
       .then(res => res.json())
       .then(restaurant =>
        dispatch({
          type: 'SHOW_RESTAURANT',
          payload: restaurant
        }),
      )
    } //end of return
 }//end of function