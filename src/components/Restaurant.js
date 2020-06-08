import React from 'react';
import {showRestaurant} from '../actions/showRestaurant';
import {connect} from 'react-redux';

class Restaurant extends React.Component {

    componentDidMount(){
        this.props.showRestaurant();
       
    }//end of function



    render(){
        return(
            console.log(this.props)
            <h1> {this.props.restaurant.name}</h1>
        ) //end of return
    }//end of render


}//end of restaurant


const mapStateToProps = (state) => {
   restaurant: state.restaurant
}


export default connect(mapStateToProps, {showRestaurant})(Restaurant)