import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ProductCard(props) {
    const [btnON, setbtnON] =useState('')
    const navigate = useNavigate()

    const setfav =() =>{
        if (btnON != 'btnON'){
            setbtnON('btnON')
        }else{setbtnON('')}
    }
    const openProdct = () =>{
        localStorage.setItem('productName', props.postTitle)
        localStorage.setItem('productImage', props.postImage)
        localStorage.setItem('productPrice', props.postPrice)
        localStorage.setItem('productDescription', props.postdescription)
        localStorage.setItem('productCategory', props.postcategory)
        localStorage.setItem('uid',props.postuid)
        navigate('/product/detail')
    }

    return ( 
        <>
        <div  className='productCard'>
            <div className='PImage'>
                <button onClick={setfav} className={btnON}><i className='fa fa-heart'></i></button>
                <img onClick={openProdct} src={props.postImage} alt='image is loading' />
            </div>      
            <div onClick={openProdct} className='brief'>
                <h4>{props.postTitle}</h4>
                <h5>${props.postPrice}</h5>
                
                
            </div>
        </div>
        </>
     );
}

export default ProductCard;