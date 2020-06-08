import React from 'react'


class LogIn extends React.Component {
    render(){
        return(
            <div className="login">
            <h1> Log in soon</h1>
            <ul>
            <form>
             <p><label>
                Username
             <input type="text" name="name" />
             </label></p>
             <p><label>
                Password
             <input type="text" name="name" />
             </label></p>
             <input type="submit" value="Submit" />
            </form>
            </ul>
            </div>
        )
    }//end of render
} //end of class

export default LogIn;