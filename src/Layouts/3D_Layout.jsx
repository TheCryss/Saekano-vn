import { Outlet } from "react-router-dom"
import { Fallback } from "../Components/Fallback"
import { Suspense } from "react"
const _3D_Layout = () => {
    return (
        <div className="w-full h-full bg-white ">
            <Suspense fallback={<Fallback/>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default _3D_Layout