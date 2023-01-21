function ProductDetail(props) {
    return ( 
        <>
            <div className="detailcard">
                <img src={props.image} alt="" />
                <h4>{props.title}</h4>
                <b>{props.price}</b>
                <p>{props.description}</p>
            </div>
        </>
     );
}

export default ProductDetail;