import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const SpendingRecord = ({ records }) => {
    return (
        <>
            <Header />
            <div>
                {records.map((record, index) => (
                    <div key={index}>
                        <p>Date: {record.date.toLocaleDateString()}</p>
                        <p>Total Expenses: {record.totalExpenses}</p>
                        <p>Remaining Balance: {record.remaining}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SpendingRecord;