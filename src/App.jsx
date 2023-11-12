import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login3D from './3D/Login3D'
import { Dialog_2D } from './pages/2D/Dialog_2D'

import { Dialog_Layout } from './Layouts/Dialog_Layout'
import { RoomScene } from './3D/app_3D'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' Component={Login3D} />
                    <Route path='first_scene' element={<Dialog_Layout />} >
                        <Route path='1' element={<Dialog_2D />}></Route>
                        <Route path='2' element={<RoomScene />}></Route>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
