import apiClient from "../../api/axios";
import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router";
import { useState } from "react";

function AddTask() {
    let navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [definition, setDefinition] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await apiClient.post('http://localhost:8000/api/task', {
                task_title: title,
                task_definition: definition,
                status_id: 1,
                user_id: 1
            });

            console.log('Task created:', response.data);
            // Optionally reset form or display success message
            setTitle('');
            setDefinition('');
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
                        <h4>Create Task</h4>
                        <p className="fw-lighter border-bottom">
                            Use the form below to create a new task. All newly created tasks will be marked as Pending.
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}

export default AddTask;