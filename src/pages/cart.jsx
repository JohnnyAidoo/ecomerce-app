import axios from "axios";
import { useState } from "react";
import ProductCard from "../components/productCard";

function Cart() {
    
    const [products, setproduct] = useState([])

    axios.get('https://fakestoreapi.com/carts').then((response) => {
        setproduct(response.data)
        console.log(response.data)
    })
    
    return (
        <>
            <div id="grid" className="p-10 grid grid-cols-2 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) =>(
                <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                />
            ))}
        </div>
        </>
    );
}

export default Cart;