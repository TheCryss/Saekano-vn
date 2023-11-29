import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login3D from './3D/Login3D'
// import app_3D from './3D/app_3D'
import Dialog_Layout from './Layouts/Dialog_Layout'
import { AnimatePresence } from 'framer-motion'
import { lazy } from 'react'

const app_3D = lazy(() => import('./3D/app_3D'))
const Dialog_2D = lazy(() => import('./pages/2D/Dialog_2D'))
// const Login3D = lazy(() => import('./3D/Login3D'))


function App() {
    return (
        <>
            <Router>
                <AnimatePresence mode='wait'>
                    <Routes>
                        <Route path='/' Component={Login3D} />
                        <Route path='3D' element={<Dialog_Layout />} >
                            <Route path='Habitacion' Component={app_3D} />
                            <Route path='Minijuego-guion' Component={app_3D} />
                        </Route>

                        <Route path='acto' element={<Dialog_Layout />} >
                            <Route path='1' element={<Dialog_2D />}></Route>
                        </Route>
                    </Routes>
                </AnimatePresence>
            </Router>
        </>
    )
}

export default App
