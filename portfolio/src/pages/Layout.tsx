import { Footer } from "@/common/Footer";
import { NavBar } from "@/common/Navbar";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen mx-2 md:mx-20">
            <NavBar />
            <main className="flex-grow py-3">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}