import { NavMenu } from "./NavMenu";

export function NavBar() {
    return (
        <div className="flex justify-between items-center w-full px-4">
            <div>Left Side Bar</div>
            <NavMenu />
        </div>
    )
}