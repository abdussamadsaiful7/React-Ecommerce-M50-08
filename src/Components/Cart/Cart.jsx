import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    //const cart = props.cart; // option-1
    //const {cart} = props; //option -2

    console.log(cart);

    let totalPrice =0;
    let totalShipping = 0;
    let totalTax =0;
    let quantity = 0;
    for(const product of cart){

        //option-2
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

        //option-1
       // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping ;
        totalTax = totalTax + product.tax;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*3/100;

    const grandTotal = totalPrice + totalShipping + tax;
    

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: $ {totalPrice} </p>
            <p style={{fontSize:'13px'}}>Total Shipping Charge: $ {totalShipping} </p>
            <p>Tax(3%): $ {tax.toFixed(2)} </p>
            <h4 className='gt'>Grand Total: $ {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;