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
import AddTask from './views/authenticated/AddTask.jsx';
import EditTask from './views/authenticated/EditTask.jsx';
import ShowTask from './views/authenticated/ShowTask.jsx';
import ShowTrashedTask from './views/authenticated/ShowTrashedTask.jsx';
import ShowArchivedTask from './views/authenticated/ShowArchivedTask.jsx';

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
        <Route path="authenticated/task-details" element={<ShowTask/>}/>
        <Route path="authenticated/trashed-task-details" element={<ShowTrashedTask/>}/>
        <Route path="authenticated/archived-task-details" element={<ShowArchivedTask/>}/>
        <Route path="authenticated/trash" element={<Trash/>}/>
        <Route path="authenticated/archives" element={<Archive/>}/>
        <Route path="authenticated/create-task" element={<AddTask/>}/>
        <Route path="authenticated/edit-task" element={<EditTask/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
