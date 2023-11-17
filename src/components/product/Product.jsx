import React, { useContext, useEffect } from 'react';
import { ColorContext } from "../../App";
import AddProduct from '../AddProduct/AddProduct';
import PropTypes from 'prop-types';
import './Product.css'
function Product({ pro }) {
    return (
        <>
            <div>
                <div className='divall'>
                    name:   {pro.name} <br></br>
                    price:   {pro.price}<br></br>
                    amount:   {pro.amount}<br></br>
                    category:   {pro.category}<br></br>
                    inSale:   {pro.inSale}<br></br>
                    <AddProduct/>
                </div>
            </div>
            <br></br>
            <br></br>          
        </>
    )
}
Product.propTypes = {
    pro: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        inSale: PropTypes.bool.isRequired,
    }).isRequired,
};
export default Product
