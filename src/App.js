import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Fields from './components/Fields';
import About from './components/About';
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

  return (
    <Router>
      <main className="flex flex-col h-screen justify-between overflow-auto">
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="bg-gradient-to-r from-indigo-600 to-blue-300 flex flex-col items-center justify-center">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-300 p-6 rounded-md text-white max-w-full w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Fields income={income} setIncome={setIncome}
                  rent={rent} setRent={setRent}
                  food={food} setFood={setFood}
                  transportation={transportation} setTransportation={setTransportation}
                  utilities={utilities} setUtilities={setUtilities}
                  insurance={insurance} setInsurance={setInsurance}
                  medical={medical} setMedical={setMedical}
                  personal={personal} setPersonal={setPersonal}
                  debt={debt} setDebt={setDebt}
                  gas={gas} setGas={setGas}
                  other={other} setOther={setOther}/>
                </div>
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
//Improvements:
// 1. Clean up code
// 2. File organization with more components 

// Additional Features:
// 1. Add a button to clear all fields
// 2. Add a button to clear a single field
// 3. Add a section to keep track of savings
// 4. Add multiple accounts to keep track of
// 5. Add a section to keep track of investments
// 6. Add a time stamp feature to keep track of when the data was entered