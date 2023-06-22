import React from 'react'
import './ProductDate.css'



const ProductDate = (props) => {

    const d = new Date();
    const month = d.toLocaleDateString('en-US', { month: 'long' });


    const day = d.toLocaleString('en-US', { day: '2-digit' });

    const year = d.getFullYear();
    return (


        <div className="prod-date-container">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>

        </div>
    )

}

export default ProductDate;