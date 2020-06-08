import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Restaurants from '../components/Restaurants';
import Restaurant from '../components/Restaurant'

class RestaurantContainer extends React.Component {

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/restaurants" component={Restaurants}/>
                    <Route path='/restaurants/:id' component={Restaurant}/>
                </Switch>
            </div>

        )
    }//end of render

}

export default RestaurantContainer;