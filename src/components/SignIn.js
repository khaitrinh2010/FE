import React from "react";
import {Link} from "react-router-dom";

const SignIn = () => {
    return(
        <div className="flex h-screen">
            <div className="bg-gray-900 flex flex-col justify-center items-center h-screen space-y-4 w-full">
                <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="text-gray-900">Email</label>
                            {/*focus:outline-none: omit the default apply to focus elements*/}
                            <input type="text" placeholder="Enter your email address"
                                   className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"></input>
                        </div>
                        <div>
                            <label className="text-gray-900">Password</label>
                            {/*focus:outline-none: omit the default apply to focus elements*/}
                            <input type="text" placeholder="Enter your password"
                                   className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"></input>
                        </div>
                    </form>
                </div>

                {/* Google Sign in */}
                <div className="text-center">
                    <button
                        type="button"
                        className="w-full flex justify-center items-center bg-white border border-gray-300 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 mx-2.5"
                    >
                        {/* SVG icon and text content here */}
                        <svg
                            className="w-5 h-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.26 0 5.54 1.41 6.81 2.59l5-5C32.5 4.95 28.71 3 24 3 14.94 3 7.41 8.74 5.09 16.26l6.99 5.43C13.7 14.43 18.44 9.5 24 9.5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M46.5 24.5c0-1.52-.14-2.97-.39-4.37H24v8.33h12.8c-.57 2.92-2.3 5.36-4.9 7.02l7.64 5.94C44.46 36.54 46.5 30.88 46.5 24.5z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M11.49 28.76A14.98 14.98 0 0 1 9 24c0-1.32.21-2.6.58-3.82L2.59 14.76C.95 18.06 0 21.89 0 26s.95 7.94 2.59 11.24l8.9-7.22z"
                            />
                            <path
                                fill="#34A853"
                                d="M24 47c6.5 0 11.95-2.15 15.93-5.83l-7.64-5.94C29.58 37.45 26.96 39 24 39c-5.56 0-10.3-4.43-11.8-10.73l-6.99 5.43C7.41 39.26 14.94 45 24 45z"
                            />
                            <path fill="none" d="M0 0h48v48H0z"/>
                        </svg>

                        Sign in with Google
                    </button>
                    {/*SVG, scale graphic, allows images to be scalable to any size without losing quality*/}

                </div>
                <div className="space-y-4">
                    {/*p nested in p is not legal, should use span instead*/}
                    <p>
                        Not a member? Click <span className="underline">here</span> to register?
                    </p>
                </div>

            </div>
        </div>

    )
}

export default SignIn

