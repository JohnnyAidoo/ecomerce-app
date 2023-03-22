import jwtDecode from 'jwt-decode';
import React, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import AdsBoard from '../components/adsBoard';
import ButtomNav from '../components/buttomNav';
import CatPopUp from '../components/categoryPopup';
import Header from '../components/header';
import ProductDetail from '../components/productDetail';
import Products from '../components/products';
import ProfilePopUP from '../components/profilePopUp';

function HomePage(props) {


    
    

      

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