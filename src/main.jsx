import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Page/Home'
import Layout from './Navline/Layout'
import Buyitem from './Page/Buyitem'
import Contact from './Page/Contact'
import Information from './Page/Information'
import Information2 from './Page/Information2'
import Nopage from './Page/Nopage'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Rootmain = () => {
  const token = localStorage.getItem('accessToken');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
