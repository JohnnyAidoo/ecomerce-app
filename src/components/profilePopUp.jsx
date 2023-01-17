import React, { useState } from 'react';

function ProfilePopUP(props) {
    const logout = () =>{
        localStorage.removeItem('token')
    }


    return ( 
        <div className='profilePopUp'>
        <a href="/">My Post <span><i className='fa fa-list'></i></span></a>
        <a href="/saved">Saved <span><i className='fa fa-heart'></i></span></a>
        <a href="/addpost">Add Post <span><i className='fa fa-plus'></i></span></a>
        <a href="/auth/login" onClick={logout} className={props.show} >Log Out <span><i className=' ' ></i></span></a>
        </div>
     );
}

export default ProfilePopUP;