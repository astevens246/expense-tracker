import React from 'react';
import Header from './Header';

const About = () => {
    return (
        <>
        <header>            
            <Header />
        </header>

            <main className="bg-gradient-to-r from-indigo-600 to-blue-300 flex flex-col items-center justify-center h-screen">
                <section className="bg-gradient-to-r from-indigo-600 to-blue-300 p-4 sm:p-6 rounded-md text-white max-w-full w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto space-y-4 text-center">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">About Page</h1>
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    The Budget Tracker app is a user-friendly tool that helps manage personal finances. It allows users to record income and expenses, providing a clear overview of their financial situation. 

                    Users can customize categories to match their spending habits. The app calculates total expenses and displays the remaining balance, making it easy to track spending and save money.

                    The app also keeps a record of past spending, offering insights into spending patterns. With the Budget Tracker app, managing finances, identifying savings opportunities, and working towards financial goals becomes simpler and more efficient.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl">Created by: Allen Stevens</p>
                    <p className="text-base sm:text-lg lg:text-xl">Contact: allen.stevens@students.dominican.edu</p>
                </section>
            </main>
        </>
    );
};

export default About;