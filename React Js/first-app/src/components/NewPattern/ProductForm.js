import { useState } from 'react';
import './ProductForm'

function ProductForm() {
    // //Multiple States Handling :- ab ek hi dum mein karte hain
    // const [fullProductInput, setFullProductInput] = useState({

    //     'title': '',
    //     'date': ''
    // });

    // function titleChangeHandler(event, prevState) {
    //     //return object with updated parameters

    //     let obj = { ...prevState, title: event.target.value }
    //     console.log(obj);
    //     return obj;

    // }

    //inko ek ek karke handle kiya 
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);

    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const productData =

        {
            title: newTitle,
            data: newDate
        }
      //  console.log(productData);

      props.onsaveProduct(productData)

        setTitle('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-product-title'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product-date'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} value={newDate } min='2023-01-01' max='2023-12-12'></input>
            </div >
            <div className='new-product-btn'>
                <button type='submit'> Add Product</button>
            </div >
        </form >
    )
}

export default ProductForm;