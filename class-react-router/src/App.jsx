import React from 'react'
import { Route, Routes } from 'react-router'
import Css from './components/Css';
import Javascript from './components/Javascript';
import Python from './components/Python';
import Html from './components/Html';
import Sql from './components/Sql';
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Html />} />
        <Route path='/css' element={<Css />} />
        <Route path='/javascript' element={<Javascript />} />
        <Route path='/sql' element={<Sql />} />
        <Route path='/python' element={<Python />} />
      </Routes>
    </div>
  )
}

export default App
