import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import Sidebar from "../../components/Sidebar";

function AuthenticatedContact() {
    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border mx-lg-5 mb-5 mt-4 p-4">
                        <h4>Contact</h4>
                        <p className="fw-lighter">
                            I am actively job seeking so if you like what you see and want to get in touch with
                            me then you can reach me through one of the following channels:
                        </p>

                        <p className="fw-lighter">
                            <i class="bi bi-envelope-at-fill"></i> Email: <a href="mailto:mrlolwane96@gmail.com"
                                className="fw-lighter d-inline nav-link">
                                <u>mrlolwane96@gmail.com</u>
                            </a>
                        </p>

                        <p className="fw-lighter">
                            <i class="bi bi-telephone-forward-fill"></i> Call: <u> 067 197 4979 </u> / <u> 072 1997 807 </u>
                        </p>

                        <p className="fw-lighter">
                            <i class="bi bi-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/mlamli-lolwane-3ba96b196/"
                                target="_blank" className="fw-lighter d-inline nav-link"><u>LinkedIn Profile</u></a>
                        </p>

                        <p className="fw-lighter">
                            <i class="bi bi-github"></i> Github: <a href="https://github.com/MlamliLolwane"
                                target="_blank" className="fw-lighter d-inline nav-link"><u>Github Profile</u></a>
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default AuthenticatedContact;
