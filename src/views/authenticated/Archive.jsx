import AuthenticatedNavbar from '../../components/AuthenticatedNavbar';
import Sidebar from '../../components/Sidebar'
function Archive() {
    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border mx-lg-5 mb-5 mt-4 p-4">
                        <h4>Archive</h4>
                        <p className="fw-lighter">
                            Below you will find archived records. Records here will be 
                            automatically deleted (permanently) within 2 minutes unless restored back to the
                            Trash tab. 
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Archive;