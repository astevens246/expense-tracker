import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses
 from './components/IncomeExpenses';  
 import TransactionList from './components/TransactionList';
 import AddTransaction from './components/AddTransaction';


function App() {
  const [transactions, setTransactions] = useState([]);

    // Define the addTransaction function
    const addTransaction = (transaction) => {
      setTransactions([transaction, ...transactions]);
    }

  return (
      <div>
        <Header />
        <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransaction addTransaction={addTransaction} /> {/* Pass addTransaction as a prop */}
        </div>
      </div>
  );
}

export default App;
