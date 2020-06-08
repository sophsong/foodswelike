import React from 'react'
import axios from 'axios'


class SignUp extends React.Component {

    state = {
        name: "",
        age: 0,
        priorities: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    } //end of function
    
    handleSubmit = (event) => {
        

        axios.post("http://localhost:3000/api/v1/signup",{
            customer: {
                name: this.state.name,
                age: this.state.age,
                priorities: this.state.priorities,
                password: this.state.password
            }
        },
        { withCredentials: false} //you need this
        )
        .then(res => res.json())
        .catch(error => console.log(error))
        

        event.preventDefault();

    } //end of function

    render(){
        // console.log(this.state)
        return(
         <div>
          <form className = "auth-form" onSubmit= {this.handleSubmit}>
            <ul>
                <p><input name="name" placeholder="Name"type="text" value={this.state.name} onChange={this.handleChange} /></p>
                <p><input name="age"  placeholder="Age"type="number" value={this.state.age} onChange={this.handleChange}/></p>
                <p><input name="priorities" placeholder="Priorities"type="text" value={this.state.priorities} onChange={this.handleChange}/></p>
                <p><input name="password" placeholder="Password"type="password" value={this.state.password} onChange={this.handleChange}/></p>
                <p><input type="submit" placeholder="Begin Your Food Journey"value="Submit" /></p>
           </ul>
          </form>
         </div>
        )
    }

}//end of component

export default SignUp