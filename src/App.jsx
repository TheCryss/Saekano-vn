import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login3D from './3D/Login3D'
// import app_3D from './3D/app_3D'
import Dialog_Layout from './Layouts/Dialog_Layout'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from './context/AuthContext'
import { lazy } from 'react'

const app_3D = lazy(() => import('./3D/app_3D'))
const Dialog_2D = lazy(() => import('./pages/2D/Dialog_2D'))
// const Login3D = lazy(() => import('./3D/Login3D'))


function App() {

    const AuthGuard = ({ children }) => {
        const { userLogged } = useAuth()
        console.log("Usert not logged",!userLogged)
        // If you area developing, you can comment the next line to avoid the verification of the user logged
        if (!userLogged) {
            return <Navigate to='/' />
        }
        return children
    }

    return (
        <>
            <Router>
                <AnimatePresence mode='wait'>
                    <Routes>
                        <Route path='/' Component={Login3D} />
                        <Route path='3D' element={<AuthGuard><Dialog_Layout /></AuthGuard>} >
                            <Route path='Habitacion' Component={app_3D} />
                            <Route path='Minijuego-guion' Component={app_3D} />
                            <Route path='Playa' Component={app_3D} />
                            <Route path='Minijuego-Playa' Component={app_3D} />

                        </Route>

                        <Route path='acto' element={<AuthGuard><Dialog_Layout /></AuthGuard>} >
                            <Route path='1' element={<Dialog_2D />}></Route>
                        </Route>
                    </Routes>
                </AnimatePresence>
            </Router>
        </>
    )
}

export default App
