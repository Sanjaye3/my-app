import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import Header from './Header';

function Subtotal() {
  return (
    <div className="subtotal">  
    {/* <Header /> */}
    <CurrencyFormat
    renderText={(value) =>(
    <>
        <p>
            Subtotal (0 items): <strong>0</strong>
        </p>
        <small className="Subtotal_gift">
            <input type="checkbox" />This order contains a gift
        </small>
    </>
    )}
    decimalScale={2}
    value={0}
    displayType={"text"}
    thousandsSeparator={true}
    prefix={"₹"}
    />
    <button>Proceed to Order</button>
    
    
  
    </div>
  );
}

export default Subtotal