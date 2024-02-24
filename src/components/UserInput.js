// UserInput.js
import React, { useState } from 'react';

const UserInput = ({ onAddField }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        onAddField(inputValue);
        setInputValue('');
    }

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="savings" className="block">{inputValue}</label>
                <input 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)}
                    type="text"
                    id="savings"
                    className="border border-gray-300 rounded-md px-2 py-1 w-12" />
            </div>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default UserInput;