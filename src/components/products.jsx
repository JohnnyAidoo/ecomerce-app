import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';

function Products() {
    const [product , setproduct] = useState()

    useEffect(() =>{
        fetch('/api').then((res) =>{
            res.json().then((data) =>{
                console.log(data)
            })
        })
    },[])


    return ( 
        <>
        <h1 className='heading'>Trending Hot</h1>
        <h3 className='subheading'>Clothing and Accessories</h3>
        <div className='productGrid'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
        </>
     );
}

export default Products;