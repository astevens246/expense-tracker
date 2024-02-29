import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Fields from './components/Fields';
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
    <div className="m-0 p-0 min-h-screen bg-gradient-to-r from-indigo-600 to-blue-300 flex flex-col items-center justify-center">
      <Header />
      <div className="bg-gradient-to-r from-indigo-600 to-blue-300 p-6 rounded-md text-white">
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
          gas={gas} setGas={setGas}
          other={other} setOther={setOther}/>

        </div>
      </div>

    </div>
  );
}

export default App;