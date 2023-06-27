import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import ProductCard from "../components/productCard";

function Detail() {

    const [product, setproduct] = useState([])
    const [products, setproducts] = useState([])

    
    const id = useParams().id

    useEffect(() =>{
       
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) =>{
            setproduct(res.data)
        })

            
        axios.get(`https://fakestoreapi.com/products/category/${product.category}`).then((res) =>{
        setproducts(res.data)
        console.log(res.data)
        })

        
    })

    return (
        <>
        <Header/>
        <div id="layout" className="w-full flex h-1/6 justify-between px-20 mt-10">
            <div className="w-1/3">
                <img className="w-full" src={product.image} alt="" />
            </div>
            <div className="w-1/2 flex flex-col">
                <p className="font-semibold text-5xl py-10" >{product.title}</p>
                <p className="text-5xl">{product.price}</p>
                <div className="border-solid py-5">
                <h4 className="text-slate-500">Description</h4>
                <p>{product.description}</p>
                </div>
            </div>
        </div>

        <div >
            <h1 className="pl-10 p-10 font-bold text-3xl"> Related listing</h1>
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
        </div>
        </>
    );
}

export default Detail;