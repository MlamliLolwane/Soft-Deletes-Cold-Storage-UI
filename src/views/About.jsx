import Navbar from "../components/Navbar";

function About() {
    return (
        <>
            <Navbar />
            <div className="border m-5 p-4">
                <h4>About</h4>
                <p className="fw-lighter">
                    This is a demo project showcasing the implementation of soft deletes based on 
                    "This article".

                    This project was inspired by a tweet from "Nuno Maduro" so I thought I would 
                    showcase my take
                    on the topic. 

                    <br/> <br/>
                    Technologies used.

                    <br/> <br/>
                    Source Code
                </p>
            </div>
        </>
    );
}

export default About;