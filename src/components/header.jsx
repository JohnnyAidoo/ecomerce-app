import React, { useState } from 'react';
import logo from '../images/logo.PNG'

function Header(props) {

    const [input , setinput] = useState('')

    const showInput = () =>{
        if (input == ''){
            setinput(<input type="search"/>)
        }else{setinput('')}
    }

    return ( 
        <>
        <div className='MobileTop'>
            {input}
            <button id='search' onClick={showInput}><i className='fa fa-search' ></i></button>

        </div>
        
        <header>
            <div className='logo'>
                <a href="/"><img src={logo} alt="logo" /> </a>
            </div>
            <div className='navs'>
                <nav>
                    <a href='/'>HOME</a>
                    <button onClick={props.clickCategory}>CATEGORY</button>
                    <button onClick={props.clickProfile}><i className='fa fa-user'></i></button>
                    <button id='earch'><i className='fa fa-search' ></i></button>
                    <a href='mycarts'><i className='fa fa-shopping-cart'></i></a>
                </nav>
            </div>
        </header>
        </>
     );
}

export default Header;