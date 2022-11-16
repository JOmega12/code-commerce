import React from 'react';
import Register from './Register';

class Authen extends React.Component{

   render() {


      const {userData, testUserData, addUserToStateFunc, signUpFunc, handleChangeFunc,formErrorsState} = this.props

      return (
         <Register 
         userData = {userData}
         testUserData = {testUserData}
         addUserToStateFunc = {addUserToStateFunc}
         signUpFunc = {signUpFunc}
         handleChangeFunc = {handleChangeFunc}
         formErrorsState = {formErrorsState}
         />
      )
   }
}

export default Authen;