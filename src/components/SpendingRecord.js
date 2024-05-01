import React from 'react';
import Header from './Header';

const SpendingRecord = ({ records, income }) => {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-r from-indigo-600 to-blue-300 flex flex-col items-center justify-center h-screen">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-300 p-6 rounded-md text-white max-w-full w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
                    {records.map((record, index) => (
                        <div key={index} className="mb-4">
                            <p className="mb-2">Date: {record.date.toLocaleDateString()}</p>
                            <br />
                            <p className="mb-4">Income: ${record.income}</p>
                            <p className="mb-2">Total Expenses: ${record.totalExpenses}</p>
                            <p className="mb-2">Remaining Balance: ${record.remaining}</p>
                            <p className="mb-2"> Note: {record.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SpendingRecord;