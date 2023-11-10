import { Outlet } from "react-router-dom"
export const Dialog_Layout = () => {
    return (
        <div className="w-full h-full bg-white  ">
            <Outlet></Outlet>
        </div>
    )
}
