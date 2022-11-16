import React from 'react';
import Authen from './authorize/Authen';
// import Checkout from './checkout/Checkout';
import '../components/css/formInput.css';

   //pass user to authentication component to register component to local state and check if the current email exists 

   //what I learned: when you create a function in the parent component, you can still use it in the child component through the use of props

      //since you need data to the register component you need to compare the data 
   //passing this prop from auth component to register component and login component
   //now you can compare the typed email inside the register component  

   //create a function that takes/adds an object and updates the state variables of users of adding a user
      //first finish the register process then you will get the object of data that user has filled 
      //check if email exists else add into the array from the function created from the parent component for users array
      //for the login component under authentication you check/ update for isLoggedIn of another state variable

   //this is what you must do first: build out your register component and have it's bells and whistles then figure out how to put the data from the register a new register 
   //this adds the user to state if email is not the same from registering user

const INIT_TEST = {
   email: 'test@test.com',
   userName: 'Jake',
   password: 'Test@1234',
   firstName: 'jake',
   lastName: 'snake',
   zipCode: '11111',
}

const newUser =[{
   email: '',
   userName: '',
   password: '',
   firstName: '',
   lastName: '',
   zipCode: '',
}]

const emailRegex = RegExp(
   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 ); 

const formValid = (formErrors) => {
   let valid = true;

   Object.values(formErrors).forEach( val => {
      val.length > 0 && (valid = false)
   })
   return valid;
}
class CodeCommerce extends React.Component {
   constructor(){
      super()
      //this is the parent component
      //this dictates whether user is logged in and would  dictate
      //what the component should show if it's logged in
      this.state={
         isLoggedIn: false,
         testUser: INIT_TEST,
         users: newUser,
         formErrors: {
            email: '',
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            zipCode: '',
         }

      }
   }

   addUserToState = (obj) => {
      const newArr = [...this.state.users];
      newArr.push(obj);
      this.setState((prevState) => ({
         ...prevState,
         users: newArr,
      }))
   }


   handleChange = ({target: {name, value}}) => {
      this.setState({[name]: value})
   }

   handleInputData = (e) => {
      this.setState((prevState) => ({
         newUser : {
            ...prevState.newUser,
            [e.target.name]: e.target.value,
         },
      }))
   }
 


   onSignUp = () => {
      
      const {userName, password, email, firstName, lastName, zipCode} = this.state.users;
      const newSignUp = {
         email: email,
         userName: userName,
         password: password,
         firstName: firstName,
         lastName: lastName,
         zipCode: zipCode,
         isLoggedIn: true,
      }
      console.log(newSignUp);

      this.setState( (state) => ({
         newUser: [...state.users, newSignUp],
         userName: '',
         password: '',
         email: '',
         firstName: '',
         lastName: '',
         zipCode: '',
         isLoggedIn: false,
      }))
   }


   handleValidation = () => {

   }

   //handling the submit form 
   handleSubmit = (e) => {
      e.preventDefault();


      if (formValid(this.state.formErrors)) {
         console.log( ` 
         --submitting

         firstName: ${this.state.users.firstName};
         lastName: ${this.state.users.lastName};
         email: ${this.state.users.email};
         userName: ${this.state.users.userName};
         password: ${this.state.users.password};
         zipCode: ${this.state.users.zipCode};
      `)
      } else {
         console.log(`Form invalid-- ERROR`)
      }
   }

   handleChange2 = (e) => {
      e.preventDefault();

      const {name, value} = e.target;

      let formErrors = this.state.formErrors;

      //look at  devslopes lessons for more
      switch (name) {
         case 'firstName':
            formErrors.firstName = value.length < 6 && value.length > 0
            ? 'minimum 3 characters'
            : '';
         break;
         case 'lastName':
            formErrors.lastName = value.length < 10 && value.length > 0
            ? 'minimum 5 characters'
            : '';
         break;
         case 'userName':
            formErrors.userName = value.length < 4 && value.length > 0
            ? 'minimum 4 characters'
            : '';
         break;
         case 'password':
            formErrors.password = value.length < 6 && value.length > 0
            ? 'minimum 6 characters'
            : '';
         break;
         case 'email':
            formErrors.email = 
               emailRegex.test(value) < 3 && value.length > 0
            ? 'minimum 3 characters'
            : 'invalid email address';
         break;
         case 'zipCode':
            formErrors.zipCode = value.length < 5 && value.length > 0
            ? 'minimum 5 characters'
            : '';
         break;
         default:
            break;
      }

      this.setState({formErrors, [name]: value}, () => console.log(this.state));
   }

   render() {
      const {users, testUser, addUserToState, onSignUp, handleInputData,} = this.state

      return (

            <div>
               {/* if isLogggedIn is False, authenticate the login, else if true, go to checkout */}

               <Authen 
                  userData = {users}
                  testUserData = {testUser}
                  addUserToStateFunc = {addUserToState}
                  signUpFunc = {onSignUp}
                  // handleChangeFunc = {handleInputData}
                  handleChangeFunc = {this.handleChange2}
                  formErrorsState = {this.state.formErrors}
               />

{/*                {this.state.isLoggedIn? 
               (
                  <Authen 
                  userArray = {this.state.users}  
                  />
               ) : 
               // <Checkout />
                  null } */}
            </div>

      )
   }
   }


export default CodeCommerce;