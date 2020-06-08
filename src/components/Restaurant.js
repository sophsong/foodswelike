// import React from 'react'

// class Restaurant extends React.Component {


//     componentDidMount(){
//         this.props.fetchRestaurants();
//     } //end of componentdidmount

//     render(){
//         return(
//             <div> 
//                 <h1> Restaurant</h1>
//         {this.props.restaurants && this.props.restaurants.map((restaurant)=> {return <div key={restaurant.id}> <h3>
//                 <Link to={`/restaurants/${restaurnt.id}`}>{restaurnt.name}</Link>
//               </h3>})}

//             </div>
//         )//end of return 
//     }//end of render

// } //end of class

// const mapStateToProps = (state) => {
//     return {restaurants: state.restaurants}
//   }

//   export default connect(mapStateToProps, {fetchRestaurants})(Restaurants)