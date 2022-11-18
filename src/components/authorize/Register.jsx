import React from 'react';

   // when i try to push the data from here to the parent component, it's not updating the parent component. Instead, what this is doing is updating the local state  but not updating the state in the parent component
   //i tried to use this funciton in the parent component and bring it back down to the child component but the preventdefault comes up, so it doesnt work and the only way it would work is if this is in the local state


class Register extends React.Component {
   constructor(props) {
      super(props) 
      
      this.state ={
         newUser: [{
            userName: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            zipCode: '',
         }],
      }
   }

   handleChange = ({target: {name, value}}) => {
      this.setState({[name]: value})
   }


   //this takes care of the password visibility
   onFunc = () => {
      const togglePassword = document.querySelector("#togglePassword");
      const password = document.querySelector("#password");

      togglePassword.addEventListener("click", function () {
         // toggle the type attribute
         const type = password.getAttribute("type") === "password" ? "text" : "password";
         password.setAttribute("type", type);
         
         // toggle the icon
         this.classList.toggle("bi-eye");
     });
   }


   //this checks if the user in the parent component has any emails going on
   checkIfUserExist = (email) => {
      return this.props.userData.filter(item => {
         return item.email === email
      })
   }

   
   theSignUpFunc = (e) => {
      e.preventDefault();


      //will this method of putting props in function to be used in render work? 
      // this.props.signUpFunc();
      this.props.addUserToStateFunc(this.props.userData);

      // this.props.addUserToStateFunc();
   }


   render() {


      const {userData, handleChangeFunc, formErrorsState} = this.props
      const {firstName, lastName, email, userName, password, zipCode} = userData;
      //addUserToStateFunc could be in submitting 

      return (
         <div className="wrapper">
            <div className="form-wrapper">
            <h1 >Register</h1>

            <form>

               <div className="userName">
                  <label htmlFor="username">Username: </label>
                  <input
                  name='userName'
                  onChange={handleChangeFunc}
                  value= {userName}
                  autoComplete="off"
                  placeholder='Username'
                  // value={}
                  type="text"
                  />
               </div>
               <div className="password">
                  <label htmlFor="">Password: </label>
                  <input type="password"
                     name='password'
                     onChange={handleChangeFunc}
                     autoComplete="off"
                     placeholder='Password'
                     value= {password}
                     // value={this.props.userArray.password}
                     id="password"
                     />
                  <i className="bi bi-eye-slash" id="togglePassword"
                  onClick={()=>this.onFunc()}
                  ></i>
               </div>

               <div className="firstName">
                  <label htmlFor="firstName">First Name </label>
                  <input
                  name='firstName'
                  value= {firstName}
                  onChange={handleChangeFunc}
                  autoComplete="off"
                  placeholder='First Name'
                  // value={}
                  type="text"
                  />

                  {formErrorsState.firstName.length > 0 && (
                     <span className='errorMessage'>{formErrorsState.firstName}</span>
                  )}

               </div>
               <div className="lastName">
                  <label htmlFor="lastName">Last Name </label>
                  <input
                  name='lastName'
                  value={lastName}
                  onChange={handleChangeFunc}
                  autoComplete="off"
                  placeholder='Last Name'
                  // value={}
                  type="text"
                  />
               </div>
               <div className="zipCode">
                  <label htmlFor="zipCode">Zipcode: </label>
                  <input
                  name='zipCode'
                  value= {zipCode}
                  onChange={handleChangeFunc}
                  autoComplete="off"
                  placeholder='Zip Code'
                  type="number"
                  />
               </div>
               <div className="email">
                  <label htmlFor="email">Email: </label>
                  <input
                  name='email'
                  value={email}
                  onChange={handleChangeFunc}
                  autoComplete="off"
                  placeholder='Email'
                  // value={}
                  type="text"
                  />
               </div>

            
               <div className='createAccount'>
                  <button type='submit'
                  onClick= {this.theSignUpFunc}
                  >
                  Create Account</button>
                  <small>Already have an account?</small>

               </div>
            </form>
   
               <div className="other-sign-in-container"> 
                  <div className="sign-in facebook">
                     <h4>Facebook</h4>
                  </div>
                  <div className="sign-in other-si">
                     <a href=''>
                        <h4> Sign In</h4>
                     </a>
                  </div>
               </div>
   
            </div>
         </div>
      )

   }
}

export default Register;