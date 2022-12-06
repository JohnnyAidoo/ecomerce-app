import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function AddPost() {
    const [titlechange , settitlechange] = useState('')
    const [pricechange , setpricechange] = useState('')
    const [imgchange , setimgchange] = useState()
    const [catchange , setcatchange] = useState('clothings')

    const [post ,setpost] = useState({
        "postAuthur":"",
        "postAuthurId":"",
        "postTitle":"",
        "postImage":"",
        "postPrice":"",
        "postCategory":""
    })

    const addTitle = (e) =>{
        settitlechange(e.target.value)
    }
    const addimg = (e) =>{
        setimgchange(e.target.value)
    }
    const addprice = (e) =>{
        setpricechange(e.target.value)
    }
    const addCat = (e) =>{
        setcatchange(e.target.value)
    }
    onsubmit =(e) => {
        e.preventDefault()
        setpost({
            "postAuthur": "admin",
            "postAuthurId":2,
            "postTitle": titlechange,
            "postImage": imgchange,
            "postPrice":pricechange,
            "postCategory":catchange
        })
        axios.post('http://127.0.0.1:8000/index/',setpost).then((res) =>{
            console.log(res)
        }).catch((err) =>{
            console.log(err)
            alert('someting went wrong')
        })
    }
    return ( 
        <div className='addpost'>
            <h1>ADD POST</h1>
            <form action="post">
                <input type="text" placeholder='title' id='title' onChange={addTitle}/>
                <input type="file" required='image/png' placeholder='images' onChange={addimg}/>
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
                    <button  id='cancel'>CANCEL</button>
                </span>
            </form>
        </div>
     );
}

export default AddPost;