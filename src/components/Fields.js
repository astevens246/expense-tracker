// add sections for each field type
// income, rent, food, transportation, 
// utilities, insurance, medical, personal, debt, gas, other
// use state for each field
// add up all expenses and subtract from income
// display remaining amount
import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Header';

const Fields = ({income, setIncome, rent, setRent, food, 
    setFood, transportation, setTransportation, utilities,
    setUtilities, insurance, setInsurance,
    medical, setMedical, personal, setPersonal, debt, setDebt,
    gas, setGas, other, setOther, setExpenseRecords}) => {
    
    const [customFields, setCustomFields] = useState([]);
    const [customFieldName, setCustomFieldName] = useState('');
    const [remainingBalance, setRemainingBalance] = React.useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [note, setNote] = useState('');

    
    useEffect(() => {
        const expenses = Number(rent) + Number(food) + Number(transportation) + Number(utilities) + Number(insurance) + Number(medical) + Number(personal) + Number(debt) + Number(gas) + Number(other);
        const customExpenses = customFields.reduce((total, field) => total + (isNaN(Number(field.value)) ? 0 : Number(field.value)), 0);
        setTotalExpenses(expenses + customExpenses);
      }, [rent, food, transportation, utilities, insurance, medical, personal, debt, gas, other, customFields]);

    const calculateBudget = (event) => {
        event.preventDefault();
        // Calculate total expenses
        let totalExpenses = parseFloat(rent) + parseFloat(food) + parseFloat(transportation) + parseFloat(utilities) + parseFloat(insurance) + parseFloat(medical) + parseFloat(personal) + parseFloat(debt) + parseFloat(gas) + parseFloat(other);

        // Include custom fields in total expenses 
        for (let field of customFields) {
            let value = parseFloat(field.value);
            if (!isNaN(value)) {
                totalExpenses += value;
            }
        }
        console.log(totalExpenses);
        // Calculate remaining balance
        const remaining = +income - totalExpenses;

        // Set remaining balance
        setRemainingBalance(remaining);

          // Add a new record to the expenseRecords state
        setExpenseRecords(prevRecords => [...prevRecords, { date: new Date(), income, totalExpenses, remaining, note: note }]);
    }

    // Format remaining balance as a currency
    const formattedBalance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(remainingBalance);
    const formattedTotalExpenses = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalExpenses);

    // These functions handle adding the custom fields and updating their values
    const addCustomField = (event) => {
        event.preventDefault();
        setCustomFields([...customFields, { id: Math.random(), value: '0', name: 'Enter New Category ' }]);
    }
    

    const handleCustomFieldValueChange = (id, newValue) => {
        setCustomFields(customFields.map(field => 
            field.id === id ? { ...field, value: newValue } : field
        ));
    }
    
    const handleCustomFieldNameChange = (id, newName) => {
        setCustomFields(customFields.map(field => 
            field.id === id ? { ...field, name: newName } : field
        ));
    }
    return (
        <>
        <header>
            <Header />
        </header>
        
        <main>
            <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="mb-4">
                        <label htmlFor="income" className="block ">Income</label>
                            <input 
                                value={income} 
                                onChange={e => setIncome(e.target.value)}
                                type="text"
                                id="income"
                                aria-label="Enter your income"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12 text-black " />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rent" className="block">Rent</label>
                            <input 
                                value={rent} 
                                onChange={e => setRent(e.target.value)}
                                type="text"
                                id="rent"
                                aria-label="Enter your rent amount"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="food" className="block">Food</label>
                            <input 
                                value={food} 
                                onChange={e => setFood(e.target.value)}
                                type="text"
                                id="food"
                                aria-label="Enter your food expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="transportation" className="block">Transportation</label>
                            <input 
                                value={transportation} 
                                onChange={e => setTransportation(e.target.value)}
                                type="text"
                                id="transportation"
                                aria-label="Enter your transportation expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="utilities" className="block">Utilities</label>
                            <input 
                                value={utilities} 
                                onChange={e => setUtilities(e.target.value)}
                                type="text"
                                id="utilities"
                                aria-label="Enter your utilities expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="insurance" className="block">Insurance</label>
                            <input 
                                value={insurance} 
                                onChange={e => setInsurance(e.target.value)}
                                type="text"
                                id="insurance"
                                aria-label="Enter your insurance expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="medical" className="block">Medical</label>
                            <input 
                                value={medical} 
                                onChange={e => setMedical(e.target.value)}
                                type="text"
                                id="medical"
                                aria-label="Enter your medical expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="personal" className="block">Personal</label>
                            <input 
                                value={personal} 
                                onChange={e => setPersonal(e.target.value)}
                                type="text"
                                id="personal"
                                aria-label="Enter your personal expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="debt" className="block">Debt</label>
                            <input 
                                value={debt} 
                                onChange={e => setDebt(e.target.value)}
                                type="text"
                                id="debt"
                                aria-label="Enter your debt expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gas" className="block">Gas</label>
                            <input 
                                value={gas} 
                                onChange={e => setGas(e.target.value)}
                                type="text"
                                id="gas"
                                aria-label="Enter your gas expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12  text-black" />
                    </div>
                        {customFields.map(field => (
                        <div key={field.id} className="mb-4">
                            <input 
                                value={field.name}
                                onChange={e => handleCustomFieldNameChange(field.id, e.target.value)}
                                type="text"
                                id={`custom-${field.id}`}
                                aria-label="Enter your custom category name"
                                className="text-white w-full sm:w-auto md:w-auto lg:w-auto"
                                style={{ backgroundColor: 'inherit' }}
                                name={`custom-${field.id}`} />
                            <input 
                                value={field.value} 
                                onChange={e => handleCustomFieldValueChange(field.id, e.target.value)}
                                type="text"
                                id={`custom-${field.id}`}
                                aria-label="Enter your custom category expenses"
                                className="border border-gray-900 rounded-md px-2 py-1 w-12 text-black" />
                                </div>
                    ))}
                </div>
                
                <div className="inc-exp-container">
                        <div className="flex justify-between mb-6">
                            <button type="submit" aria-label="Submit calculate budget form" className="btn bg-green-500 text-white px-4 py-2 rounded-md" onClick={calculateBudget}>Calculate Budget</button>
                            <button type="submit" aria-label="Submit new category form" className="btn bg-black text-white px-4 py-2 rounded-md" onClick={addCustomField}>Add Category</button>
                        </div>
                        <div>
                            <h4 className="text-4xl">Remaining Balance</h4>
                            <p className="text-green-500 text-4xl">{formattedBalance}</p>
                        </div>
                        <div>
                            <h4 className="text-4xl">Total Expenses</h4>
                            <p className="text-red-500 text-4xl">{formattedTotalExpenses}</p>
                        </div>
                    </div>
                    <div>
                        <label>Note:</label>
                        <textarea className= "text-black" value={note} onChange={(e) => setNote(e.target.value)} />
                    </div>
            </form>   
        </main>
    </>
    );
};


export default Fields;
