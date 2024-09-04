import React from "react";

const HeroSection = () => {
    return(
        <section className="bg-gray-900 text-center py-44 px-14">
            <div className="container mx-auto"></div>
            <h2 className="text-5xl font-bold text-white mb-6 animate-bounce">Welcome to our app</h2>
            <p className="text-xl text-gray-600 mb-8 animate-pulse">Your platform for connecting and collaborating with ease.</p>
            <a href="#"
               className="px-8 py-4 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300">Get
                Started</a>
        </section>
    )
}
export default HeroSection