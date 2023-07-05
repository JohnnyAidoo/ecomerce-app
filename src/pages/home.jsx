import axios  from "axios";
import Ads from "../components/ads";
import Header from "../components/header";
import ProductCard from "../components/productCard";
import { useEffect, useState } from "react";

function Home() {

    const [products, setproducts] = useState([])
    const [spinner, setspinner] = useState()

    useEffect(()=>{
        if (document.readyState !== "complete"){
           console.log('hi')
        }
    })

  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products").then((response ) =>{
        setproducts(response.data);
    })
  })

    return (
        <>
        {spinner}
        <Header />
        <Ads/>

        <h2 className="ml-20 font-bold text-4xl pb-10">Trending</h2>
        <div id="grid" className="p-10 grid grid-cols-1 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-4">
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

export default Home;