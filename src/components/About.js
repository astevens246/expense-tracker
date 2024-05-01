import React from 'react';
import Header from './Header';

const About = () => {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-r from-indigo-600 to-blue-300 flex flex-col items-center justify-center h-screen">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-300 p-6 rounded-md text-white max-w-full w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto space-y-4">
                    <h1 className="text-2xl font-bold">About Page</h1>
                    <p className="text-lg">This app is for those who want to keep track of their spending habits and 
                        seek accountability to build better financial habits for their future.</p>
                    <p className="text-lg">Created by: Allen Stevens</p>
                    <p className="text-lg">Contact: allen.stevens@students.dominican.edu</p>
                </div>
            </div>
        </>
    );
};

export default About;