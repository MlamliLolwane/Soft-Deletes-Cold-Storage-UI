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
                        <div className='d-flex align-items-center justify-content-between'>
                            <h4>Active</h4>
                            <button type="button" className="btn btn-primary ms-3">
                                Add Task</button></div>
                        <p className="fw-lighter border-bottom">
                            Below you will find active records. You can create then delete records
                            which will be soft deleted and then moved to Trash.
                        </p>
                        <table className="table rounded-0 table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col" colSpan={2}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>School Work</td>
                                    <td>Study for the mathematics test on wednesday.</td>
                                    <td><button type="button" className="btn btn-primary">Edit</button></td>
                                    <td><button type="button" className="btn btn-secondary">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Chores</td>
                                    <td>Sweep the yard.</td>
                                    <td><button type="button" className="btn btn-primary">Edit</button></td>
                                    <td><button type="button" className="btn btn-secondary">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Gym</td>
                                    <td>Upper body and cardio workout.</td>
                                    <td><button type="button" className="btn btn-primary">Edit</button></td>
                                    <td><button type="button" className="btn btn-secondary">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;