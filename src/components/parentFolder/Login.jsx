import React from 'react';

class Login extends React.Component{
   constructor(props) {
      super(props)

      this.state= {
         userName: '',
         password: '',
         isLoggedIn: false,
         isSignUp: false,
      }
   }

   //this sets the state
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
               <input type="password"
                  name='password'
                  onChange={this.handleChange}
                  autoComplete="off"
                  value={this.state.password}
                  id="password"
                  />
               <i class="bi bi-eye-slash" id="togglePassword"
               onClick={() => this.onFunc()}
               ></i>
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