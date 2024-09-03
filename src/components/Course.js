import React, { useState } from 'react';
import Header from "./Header";
const CoursePage = () => {
    const [activeTab, setActiveTab] = useState('Syllabus');
    const renderContent = () => {
        switch (activeTab) {
            case 'Syllabus':
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Course Syllabus</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Week 1: Introduction to JavaScript and React</li>
                            <li>Week 2: Understanding Components and Props</li>
                            <li>Week 3: State Management and Hooks</li>
                            {/* Additional weeks... */}
                        </ul>
                    </div>
                );
            case 'Lectures':
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Lectures</h2>
                        <p>Lecture 1: Introduction to React</p>
                        <p>Lecture 2: Advanced State Management</p>
                        {/* Additional lectures... */}
                    </div>
                );
            case 'Resources':
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Resources</h2>
                        <ul>
                            <li><a href="#" className="text-blue-600 hover:underline">React Documentation</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">JavaScript Info</a></li>
                            {/* Additional resources... */}
                        </ul>
                    </div>
                );
            case 'Assignments':
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Assignments</h2>
                        <p>Assignment 1: Build a Todo App</p>
                        <p>Assignment 2: State Management with Redux</p>
                        {/* Additional assignments... */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen text-gray-900">

            {/* Course Header */}
            <Header/>
            <header className="bg-blue-600 text-white bg-gray-900 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2">Introduction to React</h1>
                    <p className="text-lg">Instructor: Jane Doe</p>
                    <p className="text-sm mt-2">Duration: 10 weeks | Prerequisites: Basic JavaScript</p>
                    <p className="mt-4">Learn the basics of React, a popular JavaScript library for building user interfaces.</p>
                </div>
            </header>

            {/* Content Tabs */}
            <div className="max-w-4xl mx-auto mt-6 px-4">
                <div className="flex justify-between items-center space-x-4 border-b-2 border-gray-200 pb-2">
                    <button
                        onClick={() => setActiveTab('Syllabus')}
                        className={`py-2 px-4 ${activeTab === 'Syllabus' ? 'border-b-4 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                    >
                        Syllabus
                    </button>
                    <button
                        onClick={() => setActiveTab('Lectures')}
                        className={`py-2 px-4 ${activeTab === 'Lectures' ? 'border-b-4 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                    >
                        Lectures
                    </button>
                    <button
                        onClick={() => setActiveTab('Resources')}
                        className={`py-2 px-4 ${activeTab === 'Resources' ? 'border-b-4 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                    >
                        Resources
                    </button>
                    <button
                        onClick={() => setActiveTab('Assignments')}
                        className={`py-2 px-4 ${activeTab === 'Assignments' ? 'border-b-4 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                    >
                        Assignments
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <main className="max-w-4xl mx-auto py-8 px-4">
                {renderContent()}
            </main>
        </div>
    );
};

export default CoursePage;
