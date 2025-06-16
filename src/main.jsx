import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App.jsx';
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';

import AuthenticatedAbout from './views/authenticated/AuthenticatedAbout.jsx';
import AuthenticatedContact from './views/authenticated/AuthenticatedContact.jsx';

//Authenticated routes
import Home from './views/authenticated/Home.jsx';
import Trash from './views/authenticated/Trash.jsx';
import Archive from './views/authenticated/Archive.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>}/>

        <Route path="authenticated/about" element={<AuthenticatedAbout />} />
        <Route path="authenticated/contact" element={<AuthenticatedContact/>}/>
        <Route path="authenticated/active" element={<Home/>}/>
        <Route path="authenticated/trash" element={<Trash/>}/>
        <Route path="authenticated/archives" element={<Archive/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
