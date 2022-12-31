import React, { useState } from 'react';

const NOimg = require('../images/noImg.png');

function ProductCard(props) {
    const [btnON, setbtnON] =useState('')


    const setfav =() =>{
        if (btnON != 'btnON'){
            setbtnON('btnON')
        }else{setbtnON('')}
    }

    return ( 
        <>
        <div className='productCard'>
            <div className='PImage'>
                <button onClick={setfav} className={btnON}><i className='fa fa-heart'></i></button>
                <img src={props.postImage} alt='image is loading' />
            </div>      
            <div className='brief'>
                <h4>{props.postTitle}</h4>
                <h5>${props.postPrice}</h5>
                
            </div>
        </div>
        </>
     );
}

export default ProductCard;