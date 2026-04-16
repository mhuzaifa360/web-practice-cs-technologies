import React from 'react'
import { Route, Routes, BrowserRouter} from 'react-router'
import Home from './pages/Home'
import Store from './pages/Store'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div>
      
      
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
