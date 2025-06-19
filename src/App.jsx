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
                This project is part of my portfolio which can be accessed on the following
                link: <a href='#' className='fw-lighter'>Mlamli Lolwane Portfolio</a>.
              </p>

              <p className='fw-lighter'>
                You can watch the video provided to see how the project works or you can jump in 
                and explore the application yourself.
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
        <br />
      </div>
    </>
  )
}

export default App
