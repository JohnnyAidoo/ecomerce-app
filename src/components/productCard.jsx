

function ProductCard({title, price,image, rating, id}) {
    return (  
        <>
        <a href={`/products/${id}`}
        className=" p-2 w-full px-10 rounded-lg text-center border-2 border-solid hover:bg-slate-300 flex flex-col justify-around">
            <div className="shadow-sm w-full flex justify-center">
                <img 
                className="w-40"
                src={image}
                alt="" />
            </div>
            <div  >
                <h3 className="pt-1 ">{title}</h3>
                <p className="text-black font-bold text-lg  ">${price}</p>
                <div className="font-medium text-slate-700">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <button className="rounded-lg bg-black text-white py-2 mt-5 hover:bg-gray-800">View Item</button>
        </a>
        </>
    );
}

export default ProductCard;