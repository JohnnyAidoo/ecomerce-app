import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import url from "./privateRouter";

function ProductDetail() {

    const [user, setuser] = useState('...')

    const Title = localStorage.getItem('productName')
    const Image = localStorage.getItem('productImage')
    const Price = localStorage.getItem('productPrice')
    const Description = localStorage.getItem('productDescription')
    const Category = localStorage.getItem('productCategory')
    const uid = localStorage.getItem('uid')
    const navigate = useNavigate()
    
    let get = axios.get(url +`/api/users/${uid}`).then((data) =>{
        setuser(data.data.username)
    })
    const back = () =>{
        navigate('/')
    
    }
    return ( 

        <>
            <Header/>
            <div className="detailCard">
                <button onClick={back} id='cancel'>x</button>
                <div id='product'>

                    <div id='image'>
                    <img src={Image} alt="" />
                    </div>

                   <div id='details'>
                        <h3>{Title}</h3>
                        <b> ${Price}</b>
                        <i>Category : <span>{Category}</span></i>
                        <i id="postedby">Posted By : <span>{user}</span></i>
                        <p>Order above 5 of <i>{Title}</i> on SECOND SELL and get <span id="h2">20% OFF</span>
                        and order above 20 of <i>{Title} on </i>on SECOND SELL and <span id="h2">30% OFF <br /> with FREE SHIPPING</span>
                        </p>
                    </div>
                </div>
                <button>add to cart</button>
                <h3>Description</h3>
                <p>{Description }</p>
                
            </div>
        </>
     );
}

export default ProductDetail;