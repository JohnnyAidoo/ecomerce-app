import React from 'react';
import bag from '../images/bag.png'
function ProductCard() {
    return ( 
        <>
        <div className='productCard'>
            <div className='PImage'>
                <button ><i className='fa fa-heart'></i></button>
                <img src={bag} alt="image" />
            </div>
            <div className='brief'>
                <h4>bag with somethng</h4>
                <h5>GHC 300</h5>
                <button><i className='fa fa-square-plus'></i></button>
            </div>
        </div>
        </>
     );
}

export default ProductCard;