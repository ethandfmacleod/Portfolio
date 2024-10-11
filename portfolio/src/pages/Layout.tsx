import { NavBar } from "@/common/Navbar";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <div className="flex flex-col gap-4">
            <NavBar />
            <Outlet />
        </div>
    )
}