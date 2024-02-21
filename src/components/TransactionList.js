import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, deleteTransaction }) => {
    if (!transactions) {
        return null; // or some loading state
    }
    return (
        <div className="mt-4 p-4 bg-white rounded shadow overflow-auto">
            <h3 className="text-xl font-bold mb-2">History</h3>
            <ul className="space-y-2">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;