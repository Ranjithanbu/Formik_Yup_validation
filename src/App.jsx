import axios from 'axios'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './component/Home.jsx'
import Nav from './component/Nav.jsx'
import Store from './component/Store.jsx'
import Edit from './component/Edit.jsx'
import Create from './component/Create.jsx'

const App = () => {
  const [id, setId] = useState()
  //https://65d7947227d9a3bc1d7b5a67.mockapi.io/api/books/


  return (
    <div>

      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store setId={setId} />} />
          <Route path="/edit" element={<Edit id={id} />} />
          <Route path="/create" element={<Create />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
};

export default App;