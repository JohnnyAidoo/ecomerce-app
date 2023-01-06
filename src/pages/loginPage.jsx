import React from 'react';

function LoginPage() {
    return ( 
        <div className='loginPage'>
            <div className='card'>
                <form  method="post" className='form'>
                    <h4>Login</h4>
                    <input placeholder='Username' type="text" name="username" id="username" />
                    <input placeholder='Password' type="password" name="password" id="password" />
                    <button type="submit">Login</button>
                    <p>Not Registered yet? <span><a href="/signup">Sign Up</a></span></p>
                </form>    
            </div>
        </div>
     );
}
export default LoginPage;