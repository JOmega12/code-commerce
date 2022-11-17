import React from 'react';
import Authen from './authorize/Authen';
// import Checkout from './checkout/Checkout';
import '../components/css/formInput.css';


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
         user : {
            ...prevState.user,
            [e.target.name]: e.target.value,
         },
      }))
   }
 

   //this is not showing up for the code in child component
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


   //handling the submit form 
/*    handleSubmit = (e) => {
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
   } */


   //second handleChange that does validations
   handleChange2 = (e) => {
      e.preventDefault();

      const {name, value} = e.target;

      let formErrors = this.state.formErrors;

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


      this.setState(
         {formErrors, [name]: value}, 
         () => console.log(this.state),
      );
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
                  handleChangeFunc = {handleInputData}
                  // handleChangeFunc = {this.handleChange2}


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