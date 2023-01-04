import React from 'react';

function LoginPage() {
    return ( 
        <div className='loginPage'>
            <div className='card'>
                <form  method="post">
                    <input type="text" name="username" id="username" />
                    <input type="password" name="password" id="password" />
                    <button type="submit">Login</button>
                </form>    
            </div>
        </div>
     );
}

export default LoginPage;