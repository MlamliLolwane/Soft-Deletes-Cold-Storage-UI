function Sidebar() {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <div className="offcanvas offcanvas-start show"
                        data-bs-scroll="true" data-bs-backdrop="false"
                        tabIndex={-1} id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel" style={{ width: '250px' }}>
                        <div className="offcanvas-header pb-0">
                            <h5 className="offcanvas-title pt-4" id="offcanvasNavbarLabel">SOFT DELETES</h5>
                        </div>
                        <div className="offcanvas-body">
                            <hr className='border border-dark' />
                            <ul className="navbar-nav flex-grow-1 align-items-start">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">LOGIN <i className="bi bi-person-circle"></i></a>
                                </li>
                                <li className="nav-item align-items-start">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        SETTINGS <i className="bi bi-moon-stars-fill"></i>
                                    </a>
                                    <ul className="dropdown-menu ms-0">
                                        <li><button type="button" className="dropdown-item nav-link ps-2"
                                            onClick={() => handleSelect('light')}>LIGHT <i className="bi bi-sun-fill"></i></button></li>
                                        <li><button type="button" className="dropdown-item nav-link ps-2"
                                            onClick={() => handleSelect('dark')}> DARK <i className="bi bi-moon-stars-fill"></i></button></li>
                                        <li><button type="button" className="dropdown-item nav-link ps-2"
                                            onClick={() => handleSelect('system')}> SYSTEM <i className="bi bi-moon-stars-fill"></i></button></li>
                                    </ul>
                                </li>
                            </ul>
                            <hr className='border border-dark' />
                            <ul className="navbar-nav flex-grow-1 align-items-start">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">HOME <i className="bi bi-house-fill"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">TRASH <i className="bi bi-trash-fill"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ARCHIVES <i className="bi bi-archive-fill"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;