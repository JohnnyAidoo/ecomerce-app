import React from 'react';
function ProductCard(props) {



    return ( 
        <>
        <div className='productCard'>
            <div className='PImage'>
                <button onClick={props.setfav} className={props.toggle}><i className='fa fa-heart'></i></button>
                <img src={props.postImage} alt="image is loading..." />
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