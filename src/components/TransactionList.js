import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {
    if (!transactions) {
        return null; // or some loading state
      }
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;