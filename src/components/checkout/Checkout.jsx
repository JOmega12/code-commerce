import React from 'react';
import CustomerCard from './components/CustomerCard';
import ShippingInfo from './components/ShippingInfo';
import PaymentInfo from './components/PaymentInfo';
import Confirm from './components/Confirm';




class Checkout extends React.Component {
   constructor(props) {
      super(props)
      
      this.state= {

      }
   }

   render(){

      return (
         <div>
            <CustomerCard/>
            <ShippingInfo/>
            <PaymentInfo/>
            <Confirm/>
         </div>
      )
   }

}

export default Checkout;