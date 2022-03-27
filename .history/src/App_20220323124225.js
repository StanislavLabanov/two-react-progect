import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import AlertState from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/firebaseState'

function App() {

  return(
    <FirebaseState>
      <AlertState>
          <Navbar />
            <div className='container pt-4'>
            <Alert />
            <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<About />} />
            </Routes>
            </BrowserRouter>
          </div>
      </AlertState>
    </FirebaseState>
  )
}

export default App