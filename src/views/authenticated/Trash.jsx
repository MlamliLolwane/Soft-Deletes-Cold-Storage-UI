import AuthenticatedNavbar from '../../components/AuthenticatedNavbar';
import Sidebar from '../../components/Sidebar'
function Trash() {
    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border mx-lg-5 mb-5 mt-4 p-4">
                        <h4>Trash</h4>
                        <p className="fw-lighter">
                            Below you will find 'soft deleted' records. Here you can restore or delete records
                            in which: <br/> <br/>
                            1. Restoring records will remove the soft delete (deleted_at) value and the record will be moved back to the Active records tab.
                            <br/> <br/>
                            2. Deleting records will move the records to the Archives tab. Once there the records will be permanently deleted within 2 minutes unless restored back to the Trash tab.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Trash;