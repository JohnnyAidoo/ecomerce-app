import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import url from '../components/privateRouter';

function AddPost() {
    const [titlechange , settitlechange] = useState('')
    const [pricechange , setpricechange] = useState('')
    const [imgchange , setimgchange] = useState()
    const [deschange , setdeschange] = useState()
    const [catchange , setcatchange] = useState('clothings')
    const nav = useNavigate()    

    const [post ,setpost] = useState({
        "postImage":undefined,
        "postTitle":"",
        "postPrice":0,
        "postDescription":"",
        "postCategory":""
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
            "postCategory":catchange
        })
    }

    let URL = url+'/api/post/'
    onsubmit =(e) => {
        e.preventDefault()
        console.log(post)
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
            alert('something went wrong')
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
                <input type="text" placeholder='title' id='title' onChange={addTitle}/>
                <input type="file" placeholder='images' accept='image/jpeg, image/png, image/gif' onChange={addimg}/>
                <input type="text" placeholder='description' name="description" id="description" onChange={addDes} />
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
