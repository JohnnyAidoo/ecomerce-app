import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import url from '../components/privateRouter';
import jwtDecode from 'jwt-decode';

function AddPost(props) {
    const [titlechange , settitlechange] = useState('')
    const [pricechange , setpricechange] = useState('')
    const [imgchange , setimgchange] = useState()
    const [deschange , setdeschange] = useState()
    const [catchange , setcatchange] = useState('clothings')
    const [userid, setuserid] = useState()
    
    const nav = useNavigate()    
    
    const [user , setuser] = useState('')
    const login = 'auth/login/'
    let auth =  false


    useEffect(() =>{
        auth = false
        let local_token = localStorage.getItem('token')
        if (!local_token){
            localStorage.setItem('PURL', '/addpost')
            window.location.href = '/auth/login'

        }
    },[])

    useEffect(() =>{
        let token = localStorage.getItem('token')
        let decode =jwtDecode(token)
        setuserid(decode.user_id)
    })

    const [post ,setpost] = useState({
        "postImage":undefined,
        "postTitle":"",
        "postPrice":0,
        "postDescription":"",
        "postCategory":"",
        "uid":''
    })

    const addTitle = (e) =>{
        settitlechange(e.target.value)
    }
    const addimg = (e) =>{
        setimgchange(e.target.files[0])
    }
    const addprice = (e) =>{
        setpricechange(e.target.value)
    }
    const addCat = (e) =>{
        setcatchange(e.target.value)
    }
    const addDes = (e) =>{
        setdeschange(e.target.value)
    }
    const assignValues = () =>{
        setpost({
            "postImage": imgchange,
            "postTitle": titlechange,
            "postPrice":pricechange,
            "postDescription": deschange,
            "postCategory":catchange,
            "uid":userid
        })
    }

    let URL = url+'/api/post/'
    onsubmit =(e) => {
        e.preventDefault()
        assignValues()
        alert('creating post .... click OK and wait')
        axios.post(URL,post,{
            headers:{
                'content-type':'multipart/form-data'
            }
        }).then((res) =>{
            alert('success')            
            console.log(res)
            nav('/')
        }).catch((err) =>{
            //alert(err.request.statusText)
            alert(err.message)
        })
    }
    const oncancel = (e) => {
            
        alert('do want to cancel')
        nav('/')
}
    return ( 
        <div onChange={assignValues} className='addpost'>
            <h1>ADD POST</h1>
            <form action="post">
                <textarea type="text" placeholder='title' id='title' onChange={addTitle}/>
                <input type="file" placeholder='images' accept='image/jpeg, image/png, image/gif' onChange={addimg}/>
                <textarea type="text" placeholder='description' name="description" id="description" onChange={addDes} />
                <input type="number" placeholder='price' onChange={addprice}/>
                <div>
                    <span>category :</span>
                    <select  name="" id="" onChange={addCat}>
                        
                        <option value="clothings">clothings</option>
                        <option value="automobiles">automobiles</option>
                        <option value="phones and accessories">phones and accessories</option>
                        <option value="computers and accessories">computers and accessories</option>
                        <option value="TVs and more">TVs and more</option>
                        <option value="edibles">edibles</option>
                        <option value="others">others</option>
                    </select>
                    <br />
                </div>
                <span id='btns'>
                    <button type="submit">POST</button>
                    <button onClick= {oncancel} type='reset' id='cancel' >CANCEL</button>
                </span>
            </form>
        </div>
     );
}

export default AddPost;
