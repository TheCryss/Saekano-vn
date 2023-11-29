import { Outlet } from "react-router-dom"
import Transitions from "../Components/Transitions"
import { Fallback } from "../Components/Fallback"
import { lazy, Suspense } from "react"
const Dialog_Layout = () => {
    return (
        <div className="w-full h-full bg-white ">
            <Suspense fallback={<Fallback/>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Dialog_Layout