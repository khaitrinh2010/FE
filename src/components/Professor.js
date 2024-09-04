import React from "react";
import Header from "./Header";

const Professor = () => {
    return (
        <div className="min-h-screen text-white">
            <header
                className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-950 via-gray-800 to-gray-900 text-center rounded">
                <img/>
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p className="text-gray-200 text-lg">Software Developer | Writer | Tech Enthusiast</p>
                {/*Social Link section*/}
                <div className="flex justify-center space-x-6 mt-6">
                    <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter text-blue-400 text-2xl hover:text-white"></i>
                    </a>
                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin text-blue-600 text-2xl hover:text-white"></i>
                    </a>
                    <a href="mailto:john.doe@example.com">
                        <i className="fas fa-envelope text-gray-400 text-2xl hover:text-white"></i>
                    </a>
                </div>
            </header>
            {/*Content*/}
            <div className="bg-white">
                <div className="flex justify-center space-x-8 mt-6 bg-white text-black p-4 rounded-t-lg">
                    <button className="flex items-center space-x-2 px-4 py-2 font-medium">
                        <i className="fab fa-medium text-black text-2xl text-blue-500"></i>
                        <span>Writing</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 text-gray-500">
                        <i className="fas fa-podcast text-2xl text-purple-800"></i>
                        <span>Podcasts</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 text-gray-500">
                        <i className="fab fa-youtube text-black text-2xl text-red-500"></i>
                        <span>Videos</span>
                    </button>
                </div>

                <div className="flex justify-center items-center mb-4 mx-80">
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">Default</button>
                        <button className="py-2 px-4 rounded text-red-400">Table</button>
                    </div>
                    <div className="flex space-x-4">
                        <button className="flex items-center space-x-1 bg-gray-200 py-2 px-4 rounded text-orange-300">
                            <i className="fas fa-filter"></i> <span>Filters</span>
                        </button>
                        <button className="flex items-center space-x-1 bg-gray-200 py-2 px-4 rounded text-blue-500">
                            <i className="fas fa-sort"></i> <span>Sort</span>
                        </button>
                    </div>
                </div>
                {/*mx-auto: Centers the content container horizontally within its parent by applying automatic left and right margins. This centers the container in the middle of the available space.*/}
                <div className="px-4"> {/* Add a parent container with padding */}
                    <div
                        className="max-w-3xl mx-auto flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4">
                        <div>
                            <h3 className="font-semibold">America's $175 Trillion Problem</h3>
                            <p className="text-gray-500">Balaji Srinivasan · July 25th, 2024</p>
                        </div>
                        <i className="fas fa-ellipsis-v text-gray-500"></i>
                    </div>
                </div>

            </div>

        </div>


    )
}
export default Professor