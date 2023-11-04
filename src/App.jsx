import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import app_3D from './3D/app_3D'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'

function App() {
    return (
    <>
        <Router>
            <Routes>
                <Route path='/' Component={app_3D} />
                <Route path='/login' Component={Login} />
                <Route path='/profile' Component={Profile} />
            </Routes>
        </Router>
    </>
    )
}

export default App
