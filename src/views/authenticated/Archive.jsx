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
                        <p className="fw-lighter border-bottom">
                            Below you will find archived records. Records here will be 
                            automatically deleted (permanently) within 2 minutes unless restored back to the
                            Trash tab. 
                        </p>
                        <table className="table rounded-0 table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>School Work</td>
                                    <td>Study for the mathematics test on wednesday.</td>
                                    <td><button type="button" className="btn btn-primary">Restore</button></td>
                                </tr>
                                <tr>
                                    <td>Chores</td>
                                    <td>Sweep the yard.</td>
                                    <td><button type="button" className="btn btn-primary">Restore</button></td>
                                </tr>
                                <tr>
                                    <td>Gym</td>
                                    <td>Upper body and cardio workout.</td>
                                    <td><button type="button" className="btn btn-primary">Restore</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Archive;