import React from 'react';

function ProfilePopUP() {
    return ( 
        <div className='profilePopUp'>
        <a href="/login">Login <span><i className='fa fa-user' ></i></span></a>
        <a href="/">My Post <span><i className='fa fa-list'></i></span></a>
        <a href="/saved">Saved <span><i className='fa fa-heart'></i></span></a>
        <a href="/addpost">Add Post <span><i className='fa fa-plus'></i></span></a>
        </div>
     );
}

export default ProfilePopUP;