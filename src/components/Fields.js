// add sections for each field type
// income, rent, food, transportation, 
// utilities, insurance, medical, personal, debt, savings, other
// use state for each field
// add up all expenses and subtract from income
// display remaining amount

import React, { useState } from 'react'

const Fields = () => {
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

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="income">Income</label>
                    <input 
                        value={income} 
                        onChange={e => setIncome(e.target.value)}
                        type="text"
                        id="income" />
                </div>
                <div>
                    <label htmlFor="rent">Rent</label>
                    <input 
                        value={rent} 
                        onChange={e => setRent(e.target.value)}
                        type="text"
                        id="rent" />
                </div>
                <div>
                    <label htmlFor="food">Food</label>
                    <input 
                        value={food} 
                        onChange={e => setFood(e.target.value)}
                        type="text"
                        id="food" />
                </div>
                <div>
                    <label htmlFor="transportation">Transportation</label>
                    <input 
                        value={transportation} 
                        onChange={e => setTransportation(e.target.value)}
                        type="text"
                        id="transportation" />
                </div>
                <div>
                    <label htmlFor="utilities">Utilities</label>
                    <input 
                        value={utilities} 
                        onChange={e => setUtilities(e.target.value)}
                        type="text"
                        id="utilities" />
                </div>
                <div>
                    <label htmlFor="insurance">Insurance</label>
                    <input 
                        value={insurance} 
                        onChange={e => setInsurance(e.target.value)}
                        type="text"
                        id="insurance" />
                </div>
                <div>
                    <label htmlFor="medical">Medical</label>
                    <input 
                        value={medical} 
                        onChange={e => setMedical(e.target.value)}
                        type="text"
                        id="medical" />
                </div>
                <div>
                    <label htmlFor="personal">Personal</label>
                    <input 
                        value={personal} 
                        onChange={e => setPersonal(e.target.value)}
                        type="text"
                        id="personal" />
                </div>
                <div>
                    <label htmlFor="debt">Debt</label>
                    <input 
                        value={debt} 
                        onChange={e => setDebt(e.target.value)}
                        type="text"
                        id="debt" />
                </div>
                <div>
                    <label htmlFor="savings">Savings</label>
                    <input 
                        value={savings} 
                        onChange={e => setSavings(e.target.value)}
                        type="text"
                        id="savings" />
                </div>
                <div>
                    <label htmlFor="other">Other</label>
                    <input 
                        value={other} 
                        onChange={e => setOther(e.target.value)}
                        type="text"
                        id="other" />
                </div>
            </form>
        </div>
    )
}

export default Fields
