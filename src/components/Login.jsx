import React from 'react';
import './css/formInput.css';

class Login extends React.Component{
   constructor(props) {
      super(props)

      this.state= {
         userName: 'jomega',
         password: 'jakethesnake',
         isLoggedIn: false,
         isSignUp: false,
      }
   }

   handleChange = ({target: {name, value}}) => {
      this.setState({[name]: value})
   }

   render() {

      return(
         <div class="login-container layout">

            <form action="">
               <div className="ind-form">
                  <label htmlFor="">Username:</label>
                  <input type="text"
                  name='userName'
                  onChange={this.handleChange}
                  autoComplete="off"
                  value={this.state.userName}
                  />
               </div>
               <div className="ind-form">
                  <label htmlFor="">Password: </label>
                  <input type="text"
                     name='password'
                     onChange={this.handleChange}
                     autoComplete="off"
                     value={this.state.password}/>
                  <i class="bi bi-eye-slash" id="togglePassword"></i>
               </div>

               <div class="other-sign-in-container"> 
                  <div class="sign-in other-si">
                     <h4> Sign In</h4>
                  </div>
               </div>

               <div>
                  <button class="sign-up">Login</button>
               </div>
            </form>

         </div>
      )

   }
}

export default Login;