import React from 'react';

const Transaction = ({ transaction, deleteTransaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={`flex justify-between items-center p-2 rounded ${transaction.amount < 0 ? 'bg-red-200' : 'bg-green-200'}`}>
            {transaction.text} <span className="font-bold">{sign}${Math.abs(transaction.amount)}</span>
            <button
                onClick={() => deleteTransaction(transaction.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
                x
            </button>
        </li>
    )
}

export default Transaction;