import React from 'react';

const Balance = ({ transactions }) => {
  if (!transactions) {
    return null; // or some loading state
  }
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h4 className="text-gray-500">Your Balance</h4>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  )
}

export default Balance;