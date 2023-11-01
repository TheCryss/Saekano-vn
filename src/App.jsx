import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import app_3D from './3D/app_3D'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={app_3D}>
            
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
