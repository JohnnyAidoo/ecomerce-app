import axios from 'axios';
import React, { useState } from 'react';

function LoginPage() {
    
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [credentials, setcredentials] = useState({

        "username": "",
        "password": ""
    })
    
    const usernamechange = (e) =>{
        setusername(e.target.value)
    }
    
    const passwordchange = (e) =>{
        setpassword(e.target.value)
    }

    const assignValues = () =>{
        setcredentials({
            "username": username,
            "password":password
        })   
    }
    console.log(credentials)
    const url = ('http://127.0.0.1:8000/api/login/')

    onsubmit = (e) =>{
        e.preventDefault()
        if (username != ''){
            axios.post(url,credentials).then(data =>{
                console.log(data)
            }).catch(err =>{
                console.log(err)
            })
        }
    }

    return (
        <div className='loginPage'>
            <div className='card'>
                <form  method="post" className='form'>
                    <h4>Login</h4>
                    <input placeholder='Username' onChange={usernamechange} type="text" name="username" id="username" />
                    <input placeholder='Password' onChange={passwordchange} type="password" name="password" id="password" />
                    <button type="submit">Login</button>
                    <p>Not Registered yet? <span><a href="/signup">Sign Up</a></span></p>
                </form>    
            </div>
        </div>
     );
}
export default LoginPage;