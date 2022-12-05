import React, { useState } from 'react';
import Header from '../components/header';
import ProfilePopUP from '../components/profilePopUp';
import CatPopUp from '../components/categoryPopup';


function Cart() {
    const [open , setopen] = useState('')
    
    const clickCategory = () =>{
        if (open == '') {
            setopen(<CatPopUp/>)
        }else{setopen('')}
    }
       
    const clickProfile = () =>{
        if (open == '') {
            setopen(<ProfilePopUP/>)
        }else{setopen('')}
    }
   
    return ( 
        
        <>
        <Header clickCategory={clickCategory} clickProfile={clickProfile}/>
            <h2> My Cart </h2>
            <div className='cartList'>
            <b>
                <p>item</p>
                <p>price</p>
                <p>number of oder</p>
            </b>
            <b>
                <p>bag (pink)</p>
                <p>GHC 50</p>
                <p>3</p>
            </b>
            </div>
            {open}
        </>

     );
}

export default Cart;