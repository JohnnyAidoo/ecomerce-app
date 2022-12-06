import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import axios from 'axios'

function Products() {

    const [product , setproduct] = useState([])

    useEffect(() =>{
       axios.get('/index').then((res) =>{
        setproduct(res.data)
    })
    },[])

    
    return ( 
        <>
        <h1 className='heading'>Trending Hot</h1>
        <h3 className='subheading'>Clothing and Accessories</h3>
        <div className='productGrid'>
        {product.map(item =>(
            <ProductCard 
            key={item.postAuthurId}
            postImage={item.postImage}
            postTitle={item.postTitle} 
            postPrice ={item.postPrice}/>
        ))}
        </div>
        </>
     );
}

export default Products;