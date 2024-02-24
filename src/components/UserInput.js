// CategoryInput.js
import React, { useState } from 'react';

function UserInput({ onAddCategory }) {
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        if (newCategory) {
            onAddCategory(newCategory);
            setNewCategory('');
        }
    };

    return (
        <div>
            <input 
                value={newCategory} 
                onChange={e => setNewCategory(e.target.value)}
                type="text"
                placeholder="Add new category" />
            <button onClick={handleAddCategory}>Add Category</button>
        </div>
    );
}

export default UserInput;