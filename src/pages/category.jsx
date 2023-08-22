import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Ads from "../components/ads";
import Header from "../components/header";

function Category() {

    let params = useParams()
    const [products, setproducts] = useState([]);
    let name = params.name

    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/category/${name}`).then((response ) =>{
            setproducts(response.data);
        })
        console.log(params)
      },[])

    return (
        <>
        <br />
        <br />
         <h2 className="ml-20 font-bold text-4xl pb-10">{name}</h2>
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

export default Category;