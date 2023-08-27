import { NavLink } from "react-router-dom"

export const CatalogueCard = ({img, name, description, url}) => {
    return (
        <>
            <div className="card catalogue-card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <NavLink to={url} className="btn check">Check this</NavLink>
                </div>
            </div>
        </>
    )
}
