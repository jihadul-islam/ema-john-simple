import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const  cart = (props.cart);
    const total= cart.reduce((total,prd) =>total + prd.price,0);
    //old model
    // let total = 0;
    // for(let i =0;i<cart.length;i++)
    //const product = cart[i];
    //total = total + product.price;
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total> 0){
        shipping = 4.99;
    }
    else if(total > 9){
        shipping =12.99
    }
    const tax = total / 10;
    return (
        <div className="order-summary">
           <h4>Order Summary</h4>
           <p>Items ordered:${cart.length}</p>
           <p>Product Price:${total}</p>
           <p>Total price:${total+shipping+tax}</p>
           <p><small>shipping Cost:${shipping}</small></p>
           <p><small>Tax:${tax}</small></p>
           <button  className="order-btn">Taka den..</button>
        </div>
    );
};

export default Cart;