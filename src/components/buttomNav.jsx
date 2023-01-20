import React from 'react';

function ButtomNav() {

    
    return ( 
        <div className='buttomNav'>
            <a href='/'><i className='fa fa-house'></i></a>
            <a href='#'><i className='fa fa-sort'></i></a>
            <a href='/addpost'><i className='fa fa-plus'></i></a>
            <a href='/mycarts'><i className='fa fa-shopping-cart'></i></a>
            <a href='/user/profile'><i className='fa fa-user'></i></a>
        </div>
     );
}

export default ButtomNav;