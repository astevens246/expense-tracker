import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Fields from './components/Fields';
import SpendingRecord from './components/SpendingRecord';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './tailwind.css';

function App() {
  const [income, setIncome] = useState(0);
  const [rent, setRent] = useState(0);
  const [food, setFood] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [medical, setMedical] = useState(0);
  const [personal, setPersonal] = useState(0);
  const [debt, setDebt] = useState(0);
  const [gas, setGas] = useState(0);
  const [other, setOther] = useState(0);
  const [expenseRecords, setExpenseRecords] = useState([]);

  const expenses = [
    { name: 'Income', value: income },
    { name: 'Rent', value: rent },
    { name: 'Food', value: food },
    { name: 'Transportation', value: transportation },
    { name: 'Utilities', value: utilities },
    { name: 'Insurance', value: insurance },
    { name: 'Medical', value: medical },
    { name: 'Personal', value: personal },
    { name: 'Debt', value: debt },
    { name: 'Gas', value: gas },
    { name: 'Other', value: other },
  ];

  return (
    <Router>
      <main className="flex flex-col h-screen justify-between overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fields" element={
            <div className="bg-gradient-to-r from-indigo-600 to-blue-300 flex flex-col items-center justify-center">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-300 p-6 rounded-md text-white max-w-full w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
              <Fields 
                income={income} setIncome={setIncome}
                rent={rent} setRent={setRent}
                food={food} setFood={setFood}
                transportation={transportation} setTransportation={setTransportation}
                utilities={utilities} setUtilities={setUtilities}
                insurance={insurance} setInsurance={setInsurance}
                medical={medical} setMedical={setMedical}
                personal={personal} setPersonal={setPersonal}
                debt={debt} setDebt={setDebt}
                gas={gas} setGas={setGas}
                other={other} setOther={setOther}
                setExpenseRecords={setExpenseRecords} 
              />
              </div>
            </div>
          } />
          <Route path="/spending" element={<SpendingRecord records={expenseRecords} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />

      </main>
    </Router>
  );
}

export default App;