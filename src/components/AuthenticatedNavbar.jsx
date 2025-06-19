import { NavLink } from "react-router";
import LoginModal from "./LoginModal";

function AuthenticatedNavbar() {
    return (
        <>
            <LoginModal />
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/authenticated/active">SOFT <span style={{ color: 'orangered' }}>DELETES</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item px-lg-5">
                                <NavLink className="nav-link" to="/authenticated/about">About <i class="bi bi-info-circle-fill"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/authenticated/contact">Contact <i class="bi bi-telephone-fill"></i></NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-lg-none border-top mt-2">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/authenticated/active">
                                    ACTIVE <i className="bi bi-house-fill"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/authenticated/trash">
                                    TRASH <i className="bi bi-trash-fill"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/authenticated/archives">
                                    ARCHIVES <i className="bi bi-archive-fill"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AuthenticatedNavbar;