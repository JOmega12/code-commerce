const inputData = [
   {label: 'First Name', name: 'firstName'},
   {label: 'Last Name', name: 'lastName',},
   {label: 'Email', name: 'email',},
   {label: 'UserName', name: 'userName',},
]


{/*                {inputData.map(item => {
                  const {label, name} = item;
                     return (
                        <>
                        <div className="ind-form">
                        <label htmlFor="">{label}: </label>
                        <input
                        name={name}
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={this.props.state[name]}
                        type="text"
                        />
                        </div>
                        </>
                        )
                     })
                  } */}





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