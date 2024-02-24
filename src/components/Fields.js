// add sections for each field type
// income, rent, food, transportation, 
// utilities, insurance, medical, personal, debt, savings, other
// use state for each field
// add up all expenses and subtract from income
// display remaining amount
import UserInput from './UserInput';
import React from 'react'
import { useState } from 'react';

const Fields = ({income, setIncome, rent, setRent, food, 
    setFood, transportation, setTransportation, utilities,
    setUtilities, insurance, setInsurance,
    medical, setMedical, personal, setPersonal, debt, setDebt,
    savings, setSavings, other, setOther}) => {

    const [remainingBalance, setRemainingBalance] = React.useState(0);
    const totalExpenses = +rent + +food + +transportation + +utilities + +insurance + +medical + +personal + +debt + +savings + +other;
    const [categories, setCategories] = useState(['Rent', 'Food', 'Transportation']);
    const [newCategory, setNewCategory] = useState('');
  
    // Define the addCategory function
    const addCategory = (category) => {
      setCategories([category, ...categories]);
    }
    const calculateBudget = () => {
        // Calculate total expenses
        const totalExpenses = +rent + +food + +transportation + +utilities + +insurance + +medical + +personal + +debt + +savings + +other;

        // Calculate remaining balance
        const remaining = +income - totalExpenses;

        // Set remaining balance
        setRemainingBalance(remaining);
    }
    // Format remaining balance as a currency
    const formattedBalance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(remainingBalance);
    const formattedTotalExpenses = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalExpenses);
    return (
        <form>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
                <div className="mb-4">
                    <label htmlFor="income" className="block">Income</label>
                    <input 
                        value={income} 
                        onChange={e => setIncome(e.target.value)}
                        type="text"
                        id="income"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="rent" className="block">Rent</label>
                    <input 
                        value={rent} 
                        onChange={e => setRent(e.target.value)}
                        type="text"
                        id="rent"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="food" className="block">Food</label>
                    <input 
                        value={food} 
                        onChange={e => setFood(e.target.value)}
                        type="text"
                        id="food"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="transportation" className="block">Transportation</label>
                    <input 
                        value={transportation} 
                        onChange={e => setTransportation(e.target.value)}
                        type="text"
                        id="transportation"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="utilities" className="block">Utilities</label>
                    <input 
                        value={utilities} 
                        onChange={e => setUtilities(e.target.value)}
                        type="text"
                        id="utilities"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="insurance" className="block">Insurance</label>
                    <input 
                        value={insurance} 
                        onChange={e => setInsurance(e.target.value)}
                        type="text"
                        id="insurance"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="medical" className="block">Medical</label>
                    <input 
                        value={medical} 
                        onChange={e => setMedical(e.target.value)}
                        type="text"
                        id="medical"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="personal" className="block">Personal</label>
                    <input 
                        value={personal} 
                        onChange={e => setPersonal(e.target.value)}
                        type="text"
                        id="personal"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="debt" className="block">Debt</label>
                    <input 
                        value={debt} 
                        onChange={e => setDebt(e.target.value)}
                        type="text"
                        id="debt"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="savings" className="block">Savings</label>
                    <input 
                        value={savings} 
                        onChange={e => setSavings(e.target.value)}
                        type="text"
                        id="savings"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                <div className="mb-4">
                    <label htmlFor="other" className="block">Other</label>
                    <input 
                        value={other} 
                        onChange={e => setOther(e.target.value)}
                        type="text"
                        id="other"
                        className="border border-gray-300 rounded-md px-2 py-1 w-10" />
                </div>
                

            </div>
            <div>
                <button className="btn bg-blue-500 text-white px-4 py-2 rounded-md" onClick={calculateBudget}>Calculate Budget</button>
            </div>
            <div className="inc-exp-container">
                <div>
                    <h4>Remaining Balance</h4>
                    <p className="text-green-500">{formattedBalance}</p>
                </div>
                <div>
                    <h4>Total Expenses</h4>
                    <p className="text-red-500">{formattedTotalExpenses}</p>
                </div>
            </div>
        </form>
    )
}

export default Fields
