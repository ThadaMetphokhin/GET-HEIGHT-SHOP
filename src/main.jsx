import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Page/Home'
import Layout1 from './Navline/Layout'
import Layoutprofile from './Navline/Layoutprofile';
import Buyitem from './Page/Buyitem'
import Contact from './Page/Contact'
import Information from './Page/Information'
import Information2 from './Page/Information2'
import Profile from './Profilemember/Profile'
import Nopage from './Page/Nopage'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Rootmain = () => {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Layout1 />}>
            <Route index element={<Home />} />
            <Route path="buyitem" element={<Buyitem />} />
            <Route path="contact" element={<Contact />} />
            <Route path="information" element={<Information />} />
            <Route path="information2" element={<Information2 />} />
            <Route path="*" element={<Nopage />} />
          </Route>
          <Route exact path="/profile" element={<Layoutprofile />}>
            <Route index element={<Profile />} />
            <Route path="buyitem" element={<Buyitem />} />
            <Route path="contact" element={<Contact />} />
            <Route path="information" element={<Information />} />
            <Route path="information2" element={<Information2 />} />
            <Route path="*" element={<Nopage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Rootmain/>);
