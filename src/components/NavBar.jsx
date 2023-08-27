import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark p-md-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Music Shop</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/catalogue' className="nav-link">Catalogue</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link">About</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="no-style-button">
                                    <img className="navbar-icon" src="../src/assets/shopping-cart.png" alt="Shopping cart" />
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="no-style-button">
                                    <img className="navbar-icon" src="../src/assets/user.png" alt="User" />
                                    <span className="user-login">Log in</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
