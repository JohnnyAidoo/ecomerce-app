import axios from 'axios';
import React, { useState } from 'react';
import { parsePath, useNavigate } from 'react-router-dom';
import App from '../App';
import ProfilePopUP from '../components/profilePopUp';

function LoginPage(props) {
    const nav = useNavigate()    
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    
    const usernamechange = (e) =>{
        setusername(e.target.value)
    }
    
    const passwordchange = (e) =>{
        setpassword(e.target.value)
    }

    
    let authenticated = false

    const url = ('http://127.0.0.1:8000/api/login/')
    const userUrl = ('http://127.0.0.1:8000/api/users/')

    onsubmit = (e) =>{
        e.preventDefault()
        loginUser()
    }
    

    const loginUser = () =>{
        axios.post(url,({
            "username": username,
            "password": password
        })).then(data =>{
            authenticated = true
            passauth()
            console.log(data)
            alert('Login Success')
                
        }).catch(err =>{
                console.log(err)
                alert('Invailed Username or Password')
            })            
    }
    function passauth() {
        props.checkauth(true)
    }
    return (
    <div>
    <div className='loginPage'>
            <div className='card'>
                <form  method="post" className='form'>
                    <h4>Login</h4>
                    <input placeholder='Username' onChange={usernamechange} type="text" name="username" id="username" />
                    <input placeholder='Password' onChange={passwordchange} type="password" name="password" id="password" />
                    <button onClick={loginUser} type="submit">Login</button>
                    <p>Not Registered yet? <span><a href="/signup">Sign Up</a></span></p>
                </form>    
            </div>
        </div>
    </div>
     );
}
export default LoginPage;