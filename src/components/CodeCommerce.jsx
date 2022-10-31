import React from 'react';
import Authen from './parentFolder/Authen';
import Checkout from './checkout/Checkout';
import '../components/css/formInput.css';


//this is the parent component
//there will be two child components: Authentication adn Checkout
class CodeCommerce extends React.Component {
   constructor(props){
      super(props)

      this.state={
         userName: '',
         password: '',
         email: '',
         firstName: '',
         lastName: '',
         isLoggedIn: false,
         isSignUp: false,
         newUser: [],
      }
   }

   //this sets the state
   handleChange = ({target: {name, value}}) => {
      this.setState({[name]: value});
   }


   render() {
      return (
         <div>
            <Authen />
            <Checkout />
         </div>

      )
   }
   }


export default CodeCommerce;