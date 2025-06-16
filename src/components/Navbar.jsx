import { NavLink } from "react-router";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">SOFT DELETES</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home <i className="bi bi-house-fill"></i></NavLink>
                            </li>
                            <li className="nav-item px-lg-5">
                                <NavLink className="nav-link" to="/about">About <i class="bi bi-info-circle-fill"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact <i class="bi bi-telephone-fill"></i></NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings <i className="bi bi-moon-stars-fill"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><button type="button" className="dropdown-item nav-link"
                                        onClick={() => handleSelect('light')}>Light <i className="bi bi-sun-fill"></i></button></li>
                                    <li><button type="button" className="dropdown-item nav-link"
                                        onClick={() => handleSelect('dark')}> Dark <i className="bi bi-moon-stars-fill"></i></button></li>
                                    <li><button type="button" className="dropdown-item nav-link"
                                        onClick={() => handleSelect('system')}> System <i className="bi bi-moon-stars-fill"></i></button></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Login <i className="bi bi-person-circle"></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;