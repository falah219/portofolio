import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Header = () => {
    
    const [hidden, setHidden] = useState(true);
    
    return (
        <header>
            <nav className="bg-hitam border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="https://flowbite.com/" className="flex items-center">
                    <span className="self-center text-ijoh text-lg font-semibold whitespace-nowrap dark:text-white">Falah Yudhistira</span>
                </Link>
                <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center w-20 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="p-1 border rounded-lg w-20 h-10 text-sm text-center">Menu</span>
                </button>
                <div className={`${(hidden ? "hidden" : "")} justify-between items-center w-full md:flex md:w-auto md:order-1`}  id="navbar-default">
                <ul className="font-medium flex flex-col text-left p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li>
                    <a href="#profile" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#skill" className="block py-2 pl-3 pr-4 text-white rounded">Skill</a>
                    </li>
                    <li>
                    <a href="#experience" className="block py-2 pl-3 pr-4 text-white rounded ">Experience</a>
                    </li>
                    <li>
                    <a href="#project" className="block py-2 pl-3 pr-4 text-white rounded ">Projects</a>
                    </li>
                    <li>
                    <NavLink to="#" className="block py-2 pl-3 pr-4 text-white rounded bg-ijoh ">Contact Me</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    )
}
