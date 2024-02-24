import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';  
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Fields from './components/Fields';
import './tailwind.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [rent, setRent] = useState(0);
  const [food, setFood] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [medical, setMedical] = useState(0);
  const [personal, setPersonal] = useState(0);
  const [debt, setDebt] = useState(0);
  const [savings, setSavings] = useState(0);
  const [other, setOther] = useState(0);


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
        <div className="grid grid-cols-3 gap-4">
          <Fields income={income} setIncome={setIncome}
          rent={rent} setRent={setRent}
          food={food} setFood={setFood}
          transportation={transportation} setTransportation={setTransportation}
          utilities={utilities} setUtilities={setUtilities}
          insurance={insurance} setInsurance={setInsurance}
          medical={medical} setMedical={setMedical}
          personal={personal} setPersonal={setPersonal}
          debt={debt} setDebt={setDebt}
          savings={savings} setSavings={setSavings}
          other={other} setOther={setOther}/>

        </div>
      </div>

    </div>
  );
}

export default App;