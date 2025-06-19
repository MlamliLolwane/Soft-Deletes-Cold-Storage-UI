import AuthenticatedNavbar from '../../components/AuthenticatedNavbar';
import Sidebar from '../../components/Sidebar';
import { useEffect, useState } from 'react';
import apiClient from '../../api/axios';

function Trash() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const response = await apiClient.get('/api/task/trashed');
        setData(response.data);
        console.log(response.data);
    }

    async function restoreTask(id) {
        await apiClient.put(`/api/task/restore/${id}`);
        fetchData();
    }

    async function archiveTask(id) {
        await apiClient.delete(`/api/task/permanent/delete/${id}`);
        fetchData();
    }

    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border mx-lg-5 mb-5 mt-4 p-4">
                        <h4>Trash</h4>
                        <p className="fw-lighter border-bottom">
                            Below you will find 'soft deleted' records. Here you can restore or delete records
                            in which: <br /> <br />
                            1. Restoring records will remove the soft delete (deleted_at) value and the record will be moved back to the Active records tab.
                            <br /> <br />
                            2. Deleting records will move the records to the Archives tab. Once there the records will be permanently deleted within 2 minutes unless restored back to the Trash tab.
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
                                        <td><button type='button' className="btn btn-primary"
                                            onClick={() => { restoreTask(data.id) }}>Restore</button></td>
                                        <td><button type="button" onClick={() => { archiveTask(data.id) }} className="btn btn-secondary">Trash</button></td>
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

export default Trash;