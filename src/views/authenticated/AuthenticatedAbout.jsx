import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import Sidebar from "../../components/Sidebar";

function AuthenticatedAbout() {
    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border m-5 p-4">
                        <h4>About</h4>
                        <p className="fw-lighter">
                            Many developers debate whether using soft-deletes in a project is good or bad. My point of view is that
                        like all the other concepts in software development, there are no silver bullets... we use what we gotta use when
                        we have to use them. <br/><br/> 
                        This project demonstrates the implementation and benefits of soft deletes in modern web applications. Rather 
                        than permanently removing data from the database, soft deletes allow records to be marked as deleted while 
                        still retaining them for future reference, recovery, or auditing purposes.<br/> <br/>
                        A simple to do application was used to demonstrate this where by users can create a task. After that the task
                        can be soft-deleted and will be sent to the "Trash". While the record is in the "Trash" it can then be permanently 
                        deleted which will not delete the task right away but after a specified amount of time to avoid loss of data in case
                        a malicious user is the one initiating the delete event and thus the record can be recovered.
                        </p>
                        <h6>Technologies Used</h6>
                        <p className="fw-lighter">
                            This project is made up of 2 "sub-projects", a backend built with Laravel 12 and a frontend built with
                            ReactJS. The database used for the project is MySQL. The backend is hosted on a Google Cloud Engine instance
                            while the frontend is hosted on Versel.
                        </p>

                        <p className='fw-lighter'>
                            Code for both projects can be found on the following links: <br />
                            <u><a href='https://github.com/MlamliLolwane/Soft-Deletes-Cold-Storage-API' target="_blank" className="fw-lighter">Laravel Backend</a></u> and <u> 
                                <a href='https://github.com/MlamliLolwane/Soft-Deletes-Cold-Storage-UI' target="_blank" className="fw-lighter">ReactJS Frontend</a></u>
                        </p>

                        <h6>Entity Relationship Diagram</h6>
                        <p className='fw-lighter'>
                            Below is an ERD of the application showcasing the app's database schema. A code first approach
                            was used for building the application.
                        </p>
                        <img src="/erd.png" className="img-fluid" alt="Entity Relationship Diagram"></img>
                    </div>
                </main>
            </div>
        </>
    );
}

export default AuthenticatedAbout;
