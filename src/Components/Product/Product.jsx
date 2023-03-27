import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    //console.log(props)
    //console.log(props.product)
    const { img, name, seller, quantity, price, ratings } = props.product;

    const handlerAddToCart = props.handlerAddToCart;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img ? img : 'No image Found'} />
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                {/* <br/> */}
                <p>Manufacture: {seller} <br />
                    Ratings: {ratings} Stars</p>
            </div>
            <button onClick={() => handlerAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default Product;