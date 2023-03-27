import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    //const cart = props.cart; // option-1
    //const {cart} = props; //option -2

    console.log(cart);

    let totalPrice =0;
    let totalShipping = 0;
    let totalTax =0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
        totalTax = totalTax + product.tax;
    }

    const tax = totalPrice*3/100;

    const grandTotal = totalPrice + totalShipping + tax;
    

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: $ {totalPrice} </p>
            <p style={{fontSize:'13px'}}>Total Shipping Charge: $ {totalShipping} </p>
            <p>Tax(3%): $ {tax.toFixed(2)} </p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;