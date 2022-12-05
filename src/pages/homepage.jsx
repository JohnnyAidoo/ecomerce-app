import React, { useState } from 'react';
import AdsBoard from '../components/adsBoard';
import ButtomNav from '../components/buttomNav';
import CatPopUp from '../components/categoryPopup';
import Header from '../components/header';
import Products from '../components/products';
import ProfilePopUP from '../components/profilePopUp';

function HomePage() {
    
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
        <AdsBoard/>
        <Products />
        {open}
        <ButtomNav/>

        </>
     );
}

export default HomePage;