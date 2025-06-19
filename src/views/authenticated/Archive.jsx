import AuthenticatedNavbar from '../../components/AuthenticatedNavbar';
import Sidebar from '../../components/Sidebar';
import { useEffect, useState } from 'react';
import apiClient from '../../api/axios';

function Archive() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const response = await apiClient.get('/api/archived-task');
        setData(response.data);
        console.log(response.data);
    }

    async function restoreTask(id) {
        await apiClient.delete(`/api/archived-task/restore/${id}`);
        fetchData();
    }

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
                                {data?.map((data) => (
                                    <tr key={data.id}>
                                        <td onClick={() => viewTask(data)} className='hoverable'>{data.task_title}</td>
                                        <td onClick={() => viewTask(data)} className='hoverable'>{data.task_definition}</td>
                                        <td><button type='button' className="btn btn-primary"
                                            onClick={() => { restoreTask(data.id) }}>Restore</button></td>
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

export default Archive;