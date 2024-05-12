import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route } from 'react-router-dom'
import Ragistered from './pages/Ragistered'
import Login from './pages/Login'
import Mynav from './componands/Navbar'
import Listingpage from './pages/List'
import Home from './pages/Home'






const App = () => {
  return ( 
    <div>
      <Mynav/> 
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ragistered' element={<Ragistered/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/book/list' element={<Listingpage/>} />
    </Routes>
    </div>
  )
}

export default App