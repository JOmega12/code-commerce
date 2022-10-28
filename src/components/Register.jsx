import React from 'react';
import Login from './Login';
import './css/formInput.css';

class Register extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         userName: '',
         password: '',
         email: '',
         firstName: '',
         lastName: '',
         isLoggedIn: false,
         newUser: [],

      }
   }

   handleChange = ({target: {name, value}}) => {
      this.setState({[name]: value})
   }


   //this handles the signup request
   onSubmit = (e) => {
      e.preventDefault();
      
      
      const {userName, password, email, firstName, lastName} = this.state;
      const newSignUp = {
         userName: userName,
         password: password,
         email: email,
         firstName: firstName,
         lastName: lastName,
         isLoggedIn: true,
      }

      this.setState( (state) => ({
         newUser: [...state.newUser, newSignUp],
         userName: '',
         password: '',
         email: '',
         firstName: '',
         lastName: '',
         isLoggedIn: false,
      }))
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

      const inputData = [
         {label: 'First Name', name: 'firstName'},
         {label: 'Last Name', name: 'lastName',},
         {label: 'Email', name: 'email',},
         {label: 'UserName', name: 'userName',},
      ]

     // prevent form submit
/*      const form = document.querySelector("form");
     form.addEventListener('submit', function (e) {
         e.preventDefault();
     }); */


      return this.state.isLoggedIn ? (
         <Login
         newUser = {this.state.newUser}
         /> 
      ) : (
         <div class="layout">
   
            <div class="border">
            <h1 >Register</h1>
            <form onSubmit={this.onSubmit}>
   
               {inputData.map(item => {
                  const {label, name} = item;
                     return (
                        <>
                        <div className="ind-form">
                        <label htmlFor="">{label}: </label>
                        <input
                        name={name}
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={this.state[name]}
                        type="text"
                        />
                        </div>
                        </>
                        )
                     })
                  }
                  
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
                     onClick={()=>this.onFunc()}
                     ></i>
                  </div>
   
                  <button class="sign-up" value={this.isLoggedIn}>Sign Up</button>
                  
                  </form>
   
                  <div class="other-sign-in-container"> 
                     <div class="sign-in facebook">
                        <h4>Facebook</h4>
                     </div>
                     <div class="sign-in other-si">
                        <a href="">
                           <h4> Sign In</h4>
                        </a>
                     </div>
                  </div>
   
               </div>
            </div>
      )

   }
}

//wheneveri dont toggle the function for password, the website dies
export default Register;