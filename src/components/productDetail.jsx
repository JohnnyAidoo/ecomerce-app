

function ProductDetail(props) {
    return ( 
        <>
            <div className="detailCard">
                <img src={props.image} alt="" />
                <h4>detail</h4>
                <b>{props.price}</b>
                <p>{props.description}</p>
            </div>
        </>
     );
}

export default ProductDetail;