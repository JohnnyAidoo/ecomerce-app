import React from 'react';

function SignUpPage() {
    return ( 
        <div className='loginPage'>
            <div className='card'>
                <form  method="post" className='form'>
                    <h4>Sign Up</h4>
                    <input placeholder='Username' type="text" name="username" id="username" />
                    <input placeholder='password' type="password" name="password1" id="password1" />
                    <input placeholder='Re-type password' type="password" name="password2" id="password2" />
                    <button type="submit">SignUp</button>
                    <p>Have Account? <span><a href="/login">Login Up</a></span></p>
                </form>    
            </div>
        </div>
     );
}
export default SignUpPage;