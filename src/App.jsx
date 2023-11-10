import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import app_3D from './3D/app_3D'
import { Dialog_2D } from './pages/2D/Dialog_2D'

import { Dialog_Layout } from './Layouts/Dialog_Layout'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' Component={app_3D} />
                    <Route path='/first_scene' element={<Dialog_Layout />} >
                        <Route path='1' element={<Dialog_2D />}></Route>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
