import { ModeToggle } from "@/components/mode-toggle";
import { NavMenu } from "./NavMenu";
import Logo from '/logo.svg'

export function NavBar() {
    return (
        <div className="flex justify-between items-center w-full py-3">
            <div className="flex items-center">
                <a href="/">
                    <img src={Logo} alt="Logo" className="h-6 w-auto text-gray-500"/>
                </a>
            </div>
            <NavMenu />
            <ModeToggle/>
        </div>
    )
}