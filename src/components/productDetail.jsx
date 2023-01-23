import { useNavigate } from "react-router-dom";
import Header from "./header";

function ProductDetail(props) {
    const Title = localStorage.getItem('productName')
    const Image = localStorage.getItem('productImage')
    const Price = localStorage.getItem('productPrice')
    const Description = localStorage.getItem('productDescription')
    const navigate = useNavigate()
    
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
                        <h4>{Title}</h4>
                        <b> ${Price}</b>
                        <p>Order above 5 of {Title} on second sell and get 50% off </p>
                    </div>
                </div>
                <button>add to cart</button>
                <p>{Description }</p>
                
            </div>
        </>
     );
}

export default ProductDetail;