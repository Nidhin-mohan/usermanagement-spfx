// import React from 'react'
import * as React from 'react';

import { Route, Routes } from 'react-router-dom'
import {AddUser} from './component/AddUser';
import Home from './component/Home'

const App: React.FC = () => {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddUser />} />
    </Routes>
   </>
  )
}

export default App
