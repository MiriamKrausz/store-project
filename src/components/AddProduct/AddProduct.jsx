import React, { useContext, useEffect } from 'react';
import { ColorContext } from "../../App";

function AddProduct() {

    const color = useContext(ColorContext);

    useEffect(() => {
        document.title = `Button Color: ${color}`;
    }, [color]);

    return (
        <>
            <button  style={{ backgroundColor: color }}> Add Product</button>
        </>
    )
}

export default AddProduct
