import axios from 'axios';
import React, { useState } from 'react';



function SignUpPage() {

    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [password2, setpassword2] = useState('')
    const [credentials, setcredentials] = useState({

        "username": "",
        "email": "",
        "password": ""
    })
    
    const usernamechange = (e) =>{
        setusername(e.target.value)
    }
    
    const emailchange = (e) =>{
        setemail(e.target.value)
    }
    const passwordchange = (e) =>{
        setpassword(e.target.value)
    }

    const password2change =(e) =>{
        setpassword2(e.target.value)
    }
    const assignValues = () =>{
        setcredentials({
            "username": username,
            "email": email,
            "password":password
        })        
    }

    onsubmit = (e) =>{
        e.preventDefault()
        if(password != password2){
            alert('password does no match')
        }else{
            axios.post('http://127.0.0.1:8000/api/register/', credentials).then(info =>{
                console.log(info)
            }).catch(err =>{
                console.log(err)
            })
        }
    }
    return ( 
        <div onChange={assignValues} className='loginPage'>
            <div className='card'>
                <form className='form'>
                    <h4>Sign Up</h4>
                    <input placeholder='Username' onChange={usernamechange} type="text" name="username" id="username" />
                    <input placeholder='email' onChange={emailchange} type="email" name="email" id="email" />
                    <input placeholder='password' onChange={passwordchange} type="password" name="password1" id="password1" />
                    <input placeholder='Re-type password' onChange={password2change} type="password" name="password2" id="password2" />
                    <button type="submit">SignUp</button>
                    <p>Have Account? <span><a href="/login">Login Up</a></span></p>
                </form>    
            </div>
        </div>
     );
}
export default SignUpPage;