import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import axios from 'axios'
import url from './privateRouter';

function Products() {

    const [product , setproduct] = useState([])

    useEffect(() =>{
       axios.get(url+'/api/post').then((res) =>{
        setproduct(res.data)
    })
    },[])

    
    const addcart = (e) =>{
    }
    
    return ( 
        <>
        <h1 className='heading'>Trending Hot</h1>
        <h3 className='subheading'>Latest Products</h3>
        <div className='productGrid'>
        {product.map(item =>(
            <ProductCard 
            key={item.id}
            addcart={addcart}
            postImage={item.postImage}
            postTitle={item.postTitle} 
            postPrice ={item.postPrice}
            postdescription={item.postDescription}
            postcategory = {item.postCategory}
            postuid = {item.uid}
            />
        ))}
        </div>
        </>
     );
}

export default Products;