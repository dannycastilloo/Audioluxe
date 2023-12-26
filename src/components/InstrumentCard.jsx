export const InstrumentCard = ({ img, name, price }) => {
    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top productos" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-price">{price}</p>
                        <a href="guitarras.html" className="btn btn-primary">Buy now</a>
                    </div>
            </div>
        </>
    )
}
