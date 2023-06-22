import ProductDate from './ProductDate';
import './ProductItem.css'
import React, { useState } from 'react';
import Card from '../Card';


const ProductItem = (props) => {
    const tittle = "nirma";
    const [title, setTitle] = useState(tittle)
    {

    }

    function clickHandler() {
        setTitle("popcorn");
        console.log("button clicked ")
    }


    return (
        <div className="prod-item-container">

            <ProductDate date={props.date} />

            <div className="product-item-desc">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Card</button>
        </div>

    )
}

export default ProductItem;