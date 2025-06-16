import AuthenticatedNavbar from "../../components/AuthenticatedNavbar";
import Sidebar from "../../components/Sidebar";

function AuthenticatedAbout() {
    return (
        <>
            <AuthenticatedNavbar />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 ms-250 p-4">
                    <div className="border mx-lg-5 mb-5 mt-4 p-4">
                        <h4>About</h4>
                        <p className="fw-lighter">
                            This is a demo project showcasing the implementation of soft deletes based on
                            "This article".

                            This project was inspired by a tweet from "Nuno Maduro" so I thought I would
                            showcase my take
                            on the topic.

                            <br /> <br />
                            Technologies used.

                            <br /> <br />
                            Source Code
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default AuthenticatedAbout;