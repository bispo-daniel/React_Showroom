function ProductCard(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default ProductCard