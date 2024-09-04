import React from "react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        <header className="bg-gray-900 shadow-lg">
            <div className="container flex justify-between items-center mx-auto p-4">
                <Link to="/" className="text-2xl text-white font-bold">USYD27</Link>
                {/*Horizontal spacing between child elements*/}
                <input type="text" placeholder="Search for a professor or a course" className="bg-gray-700 rounded-lg w-1/2 px-10 py-1.5"></input>
                <nav className="space-x-6">
                    <Link to="/professor" className="text-white hover:text-black">Professors</Link>
                    <Link to="/course" className="text-white hover:text-black">Courses</Link>
                    <Link to="/signin" className="text-white hover:text-black">Sign In</Link>
                    <Link to="/signup" className="text-white hover:text-black bg-blue-900 px-3 py-2 rounded-lg">Sign Up</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header