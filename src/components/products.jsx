import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import axios from 'axios'

function Products() {

    const [product , setproduct] = useState([])
    const [btnON, setbtnON] =useState('')
    useEffect(() =>{
       axios.get('https://web-production-729b.up.railway.app/api/post/').then((res) =>{
        setproduct(res.data)
    })
    },[])

    const setfav =() =>{
        if (btnON != 'btnON'){
            setbtnON('btnON')
        }else{setbtnON('')}
    }
    const addcart = (e) =>{
    }
    
    return ( 
        <>
        <h1 className='heading'>Trending Hot</h1>
        <h3 className='subheading'>Clothing and Accessories</h3>
        <div className='productGrid'>
        {product.map(item =>(
            <ProductCard 
            key={item.id}
            addcart={addcart}
            setfav={setfav}
            toggle={btnON}
            postImage={item.postImage}
            postTitle={item.postTitle} 
            postPrice ={item.postPrice}/>
        ))}
        </div>
        </>
     );
}

export default Products;