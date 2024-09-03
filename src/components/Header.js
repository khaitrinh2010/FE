import React from "react";
import SearchBar from "./SearchBar";

export const Header = () => {
    return (
        <header className="bg-gray-900 shadow-lg">
            <div className="container flex justify-between items-center mx-auto p-4">
                <h1 className="text-3xl font-bold text-white">USYD27</h1>
                {/*Horizontal spacing between child elements*/}
                <input type="text" placeholder="Search for a professor or a course" className="bg-gray-700 rounded-lg w-1/2 px-10 py-1.5"></input>
                <nav className="space-x-6">
                    <a href="#" className="text-white hover:text-black">Features</a>
                    <a href="#" className="text-white hover:text-black">Pricing</a>
                    <a href="#" className="text-white hover:text-black">Contact</a>
                    <a href="#" className="text-white hover:text-black">Sign In</a>
                    <button className="bg-blue-900 px-3 py-2 rounded-lg">
                        <a href="#" className="text-white hover:text-black">Sign Up</a>
                    </button>

                </nav>
            </div>
        </header>
    )
}

export default Header