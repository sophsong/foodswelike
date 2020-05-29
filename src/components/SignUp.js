import React from 'react'


class SignUp extends React.Component {
    render(){
        return(
            <div>
            <h1> sign up soon</h1>
            <ul>
            <form>
             <p><label>
                Name:
             <input type="text" name="name" />
             </label></p>
             <p><label>
                Age:
             <input type="text" name="name" />
             </label></p>
             <p><label>
                Priorities:
             <input type="text" name="name" />
             </label></p>
             <input type="submit" value="Submit" />
            </form>
            </ul>
            </div>
        );
    } //end of render

} //end of class

export default SignUp;