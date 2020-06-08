import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchRestaurants} from '../actions/fetchRestaurants'



class Restaurants extends React.Component{
    

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     restaurants: this.props.restaurants
  //   }

  // }//end of constructor


    componentDidMount() {
        this.props.fetchRestaurants()
        //this is showing up in the console as undefined which means the issue comes in here first bcuz the render is working to at least setup the component aesthetic, but "this" and anything past that is returning as undefined
    } //end of componentdidmount
        
    render(){
     
        return (
            <div className="restaurants">
            <h1>Restaurants Coming</h1>
            <button> New Restaurant</button>
            {this.props.restaurants && this.props.restaurants.map((restaurant) => {

            return <div key={restaurant.id}>
              
              <h5>
                 
                <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
              </h5>
              
            </div>
          })
        }
            </div>
        )//end of return
    } //end of render
} //end of class

const mapStateToProps = (state) => {
    return {restaurants: state.restaurants}
  }
  
export default connect(mapStateToProps, {fetchRestaurants})(Restaurants)