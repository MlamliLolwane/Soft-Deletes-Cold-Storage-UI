import { NavLink } from "react-router";

function Sidebar() {
    return (
        <div
            className="border-end vh-100 position-fixed"
            style={{ width: '250px' }}
        >
            <div className="p-3">
                <h5 className="pt-2 ps-3 pb-3 border-bottom">
                    Menu
                </h5>
                <ul className="navbar-nav flex-column ps-3">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/authenticated/active">
                            ACTIVE <i className="bi bi-house-fill"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item py-3">
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
    );
}

export default Sidebar;