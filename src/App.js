import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';  
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './tailwind.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Define the addTransaction function
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Header />
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <Balance transactions={transactions} className="mb-4" />
        <IncomeExpenses transactions={transactions} className="mb-4" />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />        <AddTransaction addTransaction={addTransaction} />

      </div>
    </div>
  );
}

export default App;