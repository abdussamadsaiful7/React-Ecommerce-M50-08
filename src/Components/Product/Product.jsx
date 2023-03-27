import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props)
    console.log(props.product)
    const { img, name, seller, quantity, price, ratings } = props.product
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
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;