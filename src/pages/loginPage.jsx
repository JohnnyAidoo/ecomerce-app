import { Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import url from '../components/privateRouter';

function LoginPage(props) {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [alertmessage, setalertmessage] = useState('')
    const navigate = useNavigate()
    let token = ''
    const usernamechange = (e) =>{
        setusername(e.target.value)
    }
    
    const passwordchange = (e) =>{
        setpassword(e.target.value)
    }

    
    let authenticated = false

    const URL = (url+'/api/login/')
    
    onsubmit = (e) =>{
        e.preventDefault()
        loginUser()
    }
    

    const loginUser = () =>{
        axios.post(URL,({
            "username": username,
            "password": password
        })).then(data =>{
            authenticated = true
            passauth()
            token = data.data.access
            alert('Login Success')
            let PURL = localStorage.getItem('PURL')
            if (PURL) {
                navigate(PURL)    
            }else {navigate('/')}
        }).catch(err =>{
                console.log(err)
                setalertmessage(<Alert severity='error'>
                    <AlertTitle>ERROR</AlertTitle>
                    Invalid Username or Password</Alert>)
            })            
    }
    
    function passauth() {
        props.checkauth(true)
        localStorage.setItem('token',token)
    }
    return (
    <div>
    {alertmessage}
    <div className='loginPage'>
            <div className='card'>
                <form  method="post" className='form'>
                    <h4>Login</h4>
                    <input placeholder='Username' onChange={usernamechange} type="text" name="username" id="username" />
                    <input placeholder='Password' onChange={passwordchange} type="password" name="password" id="password" />
                    <button onClick={loginUser} type="submit">Login</button>
                    <p>Not Registered yet? <span><a href="/auth/signup" >Sign Up</a></span></p>
                </form>    
            </div>
        </div>
    </div>
     );
}
export default LoginPage;