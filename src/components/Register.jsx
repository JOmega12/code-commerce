import React from 'react';




class Register extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         userName: '',
         password: '',
         email: '',
         firstName: '',
         lastName: '',
         isLoggedIn: true,

      }
   }

   handleName = ({target: {name, value}}) => {
      this.setState({[name]: value})
   }


   onSubmit = (e) => {
      e.preventDefault();
      console.log(e.target['name'].value)
   }


   render() {

      // const{userName, password, email, firstName, lastName} = this.state;


      /* const inputData = [
         {label: 'First Name', name: 'firstName', type: 'text'},
         {label: 'Last Name', name: 'lastName', type: 'text'},
         {label: 'Email', name: 'email', type: 'text'},
         {label: 'UserName', name: 'username', type: 'text'},
         {label: 'Password', name: 'password', type: 'text'},
      ] */

      const leftTab = {
         marginRight: '10px'
      } 

      return(
         <div style={{backgroundColor: '#a464e3'}}>
            <h1 >Register</h1>
            <form onSubmit={this.onSubmit}>
            <label htmlFor="" className=''>First Name:</label>
            <input type="text" name="name"/> <br/>
            <label htmlFor="" className=''>Last Name:</label>
            <input type="text" name="name"/><br/>
            <label htmlFor="" className=''>Email:</label>
            <input type="text" name="name"/><br/> 
            <label htmlFor="" className=''>Username:</label>
            <input type="text" name="name"/><br/>
            <label htmlFor="" className=''>Password:</label>
            <input type="text" name="name"/><br/>


         <div class="other-sign-in"> 

            <div>
               <h4>Facebook</h4>
            </div>
            <div>
               <h4> Sign In</h4>
            </div>
         </div>
         
            </form>
         </div>
      )
   }
}


export default Register;