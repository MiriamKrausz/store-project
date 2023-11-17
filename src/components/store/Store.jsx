import  { useContext, useEffect } from 'react';
import Product from '../product/Product';
import { products } from '../../Data/data'
function Store() {
    return (
        <div>
            <h1>List products</h1>
            <div>
                {
                    products.map((item) => (
                        <Product pro={item}></Product>
                    ))}
            </div>
        </div>
    );
}
export default Store
