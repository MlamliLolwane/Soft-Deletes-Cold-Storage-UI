import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import Sidebar from "../../components/Sidebar";
import { useLocation, useNavigate } from "react-router";
import apiClient from "../../api/axios";

function ShowTask() {
    const location = useLocation();
    const navigate = useNavigate();
    const task = location.state.data || {};

    async function handleSubmit(e, status) {
        e.preventDefault();

        try {
            const response = await apiClient.put(`http://localhost:8000/api/task/status/${task.id}`, {
                status_id: status
            });

            navigate("/authenticated/active");
        } catch (error) {
            console.error('Error updating task:', error.response?.data || error.message);
        }
    }

    return (<>
        <AuthenticatedNavbar />
        <div className="d-flex">
            <Sidebar />
            <main className="flex-grow-1 ms-250 p-4">
                <div className="border mx-lg-5 mb-5 mt-4 p-4">
                    <div className='d-flex align-items-center justify-content-between'>
                        <h4>View Task</h4>
                    </div>
                    <p className="fw-lighter border-bottom pb-3">
                        Below are the details of the task you created. Use the buttons provided
                        to Cancel or mark the task as Complete.
                    </p>

                    <h5>{task.task_title}</h5>
                    <p className="fw-lighter">{task.task_definition}</p>
                    <p className="fw-lighter">Status: {task.status.status_code}</p>

                    <div>
                        <button type="button" onClick={(e) => handleSubmit(e, 3)} className="btn btn-secondary">
                            Cancel Task</button>
                        <button type="button" onClick={(e) => handleSubmit(e, 2)} className="btn btn-primary ms-3">
                            Complete Task</button>
                    </div>
                </div>
            </main>
        </div>
    </>
    )
}

export default ShowTask;