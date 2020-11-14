import React from 'react';
import'./Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div>
<img src={props.product.img} alt=""/>
            </div>
            <div>
            <h4 className='product-name'>{props.product.name}</h4>
            <br/>
            <p><small>by:{props.product.seller}</small></p>
            <p>Price:{props.product.price}</p>
            <p>only {props.product.stock} left in stock-order soon</p>
            <button className='btn-bottom'><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;