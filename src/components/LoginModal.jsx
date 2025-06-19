import { useNavigate} from "react-router";

function LoginModal() {
    const navigate = useNavigate();
    function authenticate()
    {
        navigate('/authenticated/active');
    }

    return (
        <>
            <div className="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h4 className="modal-title fs-5" id="exampleModalLabel">Login</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="fw-lighter p-3">
                            Hi and welcome to this demo application. Click on the Login button below to begin using the application.
                            Note: There is no actual authentication for this application since it was designed to showcase the
                            topic of soft deletes.
                        </div>
                        <div className="mx-auto mb-4">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" onClick={() => authenticate()} 
                            className="btn btn-primary ms-3" data-bs-dismiss="modal">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginModal;