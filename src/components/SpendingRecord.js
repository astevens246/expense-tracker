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
                            <p className="mb-2 text-sm sm:text-base"><span className="font-bold">Date:</span> {record.date.toLocaleDateString()}</p>
                            <br />
                            <p className="mb-4 text-sm sm:text-base"><span className="font-bold">Income:</span> ${record.income}</p>
                            <p className="mb-2 text-sm sm:text-base"><span className="font-bold">Total Expenses:</span> ${record.totalExpenses}</p>
                            <p className="mb-2 text-sm sm:text-base"><span className="font-bold">Remaining Balance:</span> ${record.remaining}</p>
                            <p className="mb-2 text-sm sm:text-base"><span className="font-bold">Note:</span> {record.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SpendingRecord;