import AuthenticatedNavbar from '../../components/AuthenticatedNavbar';
import Sidebar from '../../components/Sidebar';
import { useEffect, useState } from 'react';
import apiClient from '../../api/axios';
import { NavLink, useNavigate } from 'react-router';

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const response = await apiClient.get('/api/task');
        setData(response.data);
        console.log(response.data);
    }

    async function deleteTask(id) {
        await apiClient.delete(`/api/task/${id}`);
        fetchData();
    }

    function viewTask(data) {
        navigate('/authenticated/task-details', {
            state: {
                data
            },
        });
    }

    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border mx-lg-5 mb-5 mt-4 p-4">
                        <div className='d-flex align-items-center justify-content-between'>
                            <h4>Active</h4>
                            <NavLink to="/authenticated/create-task" className="btn btn-primary ms-3">
                                Add Task</NavLink></div>
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
                                {data?.map((data) => (
                                    <tr key={data.id}>
                                        <td onClick={() => viewTask(data)} className='hoverable'>{data.task_title}</td>
                                        <td onClick={() => viewTask(data)} className='hoverable'>{data.task_definition}</td>
                                        <td><NavLink to="/authenticated/edit-task" className="btn btn-primary"
                                            state={data}>Edit</NavLink></td>
                                        <td><button type="button" onClick={() => { deleteTask(data.id) }} className="btn btn-secondary">Trash</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;