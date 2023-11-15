import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login3D from './3D/Login3D'
import { Dialog_2D } from './pages/2D/Dialog_2D'
import ChangeRoomTem from './3D/World/changeRoomTem'
import { Dialog_Layout } from './Layouts/Dialog_Layout'
import { app_3D } from './3D/app_3D'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' Component={Login3D} />
                    <Route path='/Dev' Component={ChangeRoomTem} />
                    <Route path='/room3D' Component={app_3D} />
                    <Route path='/Minijuego-guion' Component={app_3D} /> // this have to change
                    <Route path='acto' element={<Dialog_Layout />} >
                        <Route path='1' element={<Dialog_2D />}></Route>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
