import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import apiClient from "../../api/axios";

function EditTask() {
    let navigate = useNavigate();
    const location = useLocation();
    const task = location.state || {};
    const [title, setTitle] = useState(task.task_title || '');
    const [definition, setDefinition] = useState(task.task_definition || '');

    async function handleSubmit(e)
    {
        e.preventDefault();

        try {
            const response = await apiClient.put(`http://localhost:8000/api/task/${task.id}`, {
                task_title: title,
                task_definition: definition,
                status_id: task.status_id,
                user_id: task.user_id
            });

            navigate("/authenticated/active");
        } catch (error) {
            console.error('Error creating task:', error.response?.data || error.message);
        }
    }
    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border mx-lg-5 mb-5 mt-4 p-4">
                        <h4>Edit Task</h4>
                        <p className="fw-lighter border-bottom">
                            Use the form below to update an existing task.
                            You can use this page to set the task to complete or cancel the task.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-0 fw-lighter"  
                                    id="task_title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                <label for="task_title">Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control rounded-0 fw-lighter" placeholder=" " id="task_definition"
                                    style={{ height: '100px' }}
                                    value={definition} onChange={(e) => setDefinition(e.target.value)}></textarea>
                                <label for="task_definition">Content</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}

export default EditTask;