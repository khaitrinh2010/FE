import React from "react";

export const Header = () => {
    return (
        <header className="bg-pink-400 shadow-lg">
            <div className="container flex justify-between items-center mx-auto p-4">
                <h1 className="text-3xl font-bold text-white">USYD27</h1>
                {/*Horizontal spacing between child elements*/}
                <nav className="space-x-6">
                    <a href="#" className="text-white hover:text-black">Features</a>
                    <a href="#" className="text-white hover:text-black">Pricing</a>
                    <a href="#" className="text-white hover:text-black">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header