import axios  from "axios";
import Ads from "../components/ads";
import Header from "../components/header";
import ProductCard from "../components/productCard";
import { useEffect, useState } from "react";

function Home() {

    const [products, setproducts] = useState([])

  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products").then((response ) =>{
        setproducts(response.data);
    })
  })

    return (
        <>
        <Header />
        <Ads/>

        <h2 className="pl-20 font-bold text-4xl pb-10">Trending</h2>
        <div className="grid grid-cols-4 pl-20 gap-y-10 gap-x-1">
            {products.map((product) =>(
                <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                />
            ))}
            <ProductCard/>
        </div>
        </>
    );
}

export default Home;