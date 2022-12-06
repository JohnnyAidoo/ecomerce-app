import React from 'react';

function ButtomNav() {

    
    return ( 
        <div className='buttomNav'>
            <a href='/'><i className='fa fa-house'></i></a>
            <a href='#'><i className='fa fa-sort'></i></a>
            <a href='/addpost'><i className='fa fa-plus'></i></a>
            <a href='saved'><i className='fa fa-heart'></i></a>
            <a href='/login'><i className='fa fa-user'></i></a>
        </div>
     );
}

export default ButtomNav;