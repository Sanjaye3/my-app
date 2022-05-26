import React from 'react'
import "./Checkout.css"
import Header from './Header';
import Subtotal from './Subtotal';
function Checkout() {
  return (
   
    <div className ="checkout">
       {/* <Header /> */}
    <div className="checkout_left">
        <img className="checkout_ad" src="https://m.media-amazon.com/images/I/51biOO2GWLL._SX1500_.jpg" alt="poster" />
    <div>
        <h2 className="checkout_title">Your Shopping Cart</h2>



    </div>

    </div>
        
    <div className="checkout_right">
    {/* <h2>The subtotal will go here</h2>   */}
      </div>  
    
    <Subtotal/>
    
    </div>

  )
}

export default Checkout