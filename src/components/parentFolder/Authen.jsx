import React from 'react';
import Register from './Register';
import Login from './Login';


class Authen extends React.Component{
   constructor(props) {
      super(props)

      this.state = {
         userName: 'jake',
         password: 'jakethesnake',
         email: 'test@gmail.com',
         firstName: 'jake',
         lastName: 'snake',
         isSignUp: false,
         newUser: [],
      }
   }

   //this sets the state
   handleChange = ({target: {name, value}}) => {

      this.props.
      this.setState({[name]: value})
   }

   render() {
      /* return(
         <div>
            <Register/>
            <Login />
         </div>
      ) */

      return this.state.isSignUp ? (
         <Login />
      ) : (
         <Register />
      )
   }
}

//look up lifting up state react js

export default Authen;