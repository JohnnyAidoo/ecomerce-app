import React, { useState } from 'react';

function ProfilePopUP(props) {



    return ( 
        <div className='profilePopUp'>
        <a href="/login" className={props.show} >Login <span><i className=' fa fa-user' ></i></span></a>
        <a href="/">My Post <span><i className='fa fa-list'></i></span></a>
        <a href="/saved">Saved <span><i className='fa fa-heart'></i></span></a>
        <a href="/addpost">Add Post <span><i className='fa fa-plus'></i></span></a>
        </div>
     );
}

export default ProfilePopUP;