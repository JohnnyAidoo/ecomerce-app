import React, { useState } from 'react';
import logo from '../images/logo.PNG'

function Header(props) {

    const [input , setinput] = useState('')
    const [searchVisible, setserchVisible] = useState(null)
    const showInput = () =>{
        if (input == ''){
            setinput(<input type="search"/>)
        }else{setinput('')}
    }
    const openSearchBar = () =>{
        if (searchVisible == null ){        
        setserchVisible(<input type="search" id='searchbar'/>)
        }else{setserchVisible(null)}
    }

    return ( 
        <>
        <div className='MobileTop'>
            <div className='logo'>
                <a href="/"><img src={logo} alt="logo" /> </a>
            </div>            
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
                    {searchVisible}
                    <button id='earch' onClick={openSearchBar}><i className='fa fa-search' ></i></button>
                    <a href='mycarts'><i className='fa fa-shopping-cart'></i></a>
                </nav>
            </div>
        </header>
        </>
     );
}

export default Header;