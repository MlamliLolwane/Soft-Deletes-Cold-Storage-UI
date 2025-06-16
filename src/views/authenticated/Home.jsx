import AuthenticatedNavbar from '../../components/AuthenticatedNavbar';
import Sidebar from '../../components/Sidebar'
function Home() {
    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border mx-lg-5 mb-5 mt-4 p-4">
                        <h4>Active</h4>
                        <p className="fw-lighter">
                            Below you will find active records. You can create then delete records
                            which will be soft deleted and then moved to Trash.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;