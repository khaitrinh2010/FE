import React from "react";
import Header from "./Header";

const Profile = () => {
    return(
        <div>
            <Header/>
            {/*SideBar*/}
            <div className="flex">
                <aside className="w-1/5 h-screen p-4 bg-gray-900 text-white ">
                    <div className="flex flex-col items-center space-x-4 mb-8">
                        <div>
                            <p className="font-bold">Khai Trinh</p>
                            <p className="text-sm text-gray-400">trinhlamkhai@gmail.com</p>
                        </div>
                        <hr className="my-4 border-1 border-l-gray-500 w-3/4 rounded-lg"/>
                        <nav className="flex flex-col space-y-4 mx-0">
                            <a href="#" className="text-gray-400 hover:text-white">Profile Settings</a>
                            <a href="#" className="text-gray-400 hover:text-white">Email Notifications</a>
                            <a href="#" className="text-gray-400 hover:text-white">Subscriptions</a>
                        </nav>
                    </div>

                </aside>
                <main className="flex-1 p-8 bg-gray-900 text-white">
                    <h1 className="text-4xl font-bold">Profile Settings</h1>
                    <p className="mt-2 mb-6 text-gray-400">Update your profile's information.</p>
                    <div className="flex space-x-4 mb-6">
                        <input type="text" placeholder="First Name"
                               className="bg-gray-700 text-white rounded-lg px-4 py-2"></input>
                        <input type="text" placeholder="Last Name"
                               className="bg-gray-700 text-white rounded-lg px-4 py-2"></input>
                        <button
                            className="rounded-lg bg-gray-700 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:ring-amber-100">Save
                        </button>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Did you forget your password? Reset your password here.
                    </p>
                    <button className="bg-purple-600 text-white rounded px-4 py-2">
                        Send Reset Password Email
                    </button>

                </main>

                {/* Profile picture section */}
                <div className="w-1/4 flex flex-col items-center bg-gray-900 py-32">
                    <div className="h-48 w-48 bg-gray-800 rounded-full flex justify-center items-center mb-4">
                        <svg className="text-gray-500 w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                    <button className="bg-purple-600 text-white rounded px-4 py-2">Choose an image</button>
                </div>
            </div>

            {/*Main Content*/}

        </div>

    )
}

export default Profile