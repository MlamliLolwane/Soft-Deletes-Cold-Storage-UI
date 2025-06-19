import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';
import Typed from 'typed.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const typed = new Typed('#typed-text', {
      strings: ['SOFT DELETES'],
      typeSpeed: 100,
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          const intro = document.getElementById('intro');
          if (intro) {
            intro.classList.remove('d-none');
          }
        }, 900);
      },
    });

    document.getElementById('intro').removeAttribute('d-none');
    return () => typed.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <div className='landing'>
      <div className='flex-grow-1 mx-auto landing center border'>
        <div className='center2'>
          <p style={{ fontSize: "90px" }} className='mx-auto align-middle fw-bold pb-0 mb-0' id="typed-text"></p>
          <h3 id="intro" className="text-center pt-0 mt-0 d-none">A project by Mlamli Lolwane </h3>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h5 className='pt-5 pb-3'>Hi and welcome to this demo project</h5>
            <p className='fw-lighter'>
              This project is the implementation of <u><a href='#' className="fw-lighter">
                Soft Deletes - My Take</a></u> article I wrote on Medium. DO note that this is only a demo project
              so code from this project should be used with caution.
            </p>

            <p className='fw-lighter'>
              This project is a simple to do application where by users can create a to do item by inputing the
              title of the task they have to complete and then add a description as well. Then users can mark the
              status of the task (Complete / Cancelled).
            </p>
            <p className='fw-lighter'>
              This project is made up of 2 "sub-projects", a backend powered by Laravel 12 and a frontend powered
              by ReactJS.
            </p>
            <p className='fw-lighter'>
              Code for both projects can be found on the following links: <br/>
              <u><a href='#' className="fw-lighter">Laravel Backend</a></u> and <u><a href='#' className="fw-lighter">ReactJS Frontend</a></u>
            </p>
          </div>
          <div className="col">
            <div className="video-wrapper mb-5">
              <div className="mb-5">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/m6S1P9AIF84"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-top'></div>
      <div className='text-center mb-3 mt-5'>
        <p className='fw-lighter'>Made with <i class="bi bi-heart-fill"></i> by Mlamli Lolwane</p>
      </div>
      <br/>
      </div>
    </>
  )
}

export default App
