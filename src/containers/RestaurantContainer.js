import React from 'react'
import {Route, Switch} from 'react-router-dom' 
import Restaurants from '../components/Restaurants'

class RestaurantContainer extends React.Component {

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/restaurants" component={Restaurants}/>

                </Switch>
            </div>

        )
    }//end of render

}

export default RestaurantContainer;