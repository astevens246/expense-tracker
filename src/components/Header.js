import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4 shadow-md rounded text-center">
      <h1 className="text-xl font-bold">Expense Tracker</h1>
      <nav className="space-x-4">
                <Link to="/expense-tracker">Home</Link>
                <Link to="/fields">Expense Tracker</Link>
                <Link to="/spending">Spending Record</Link>
                <Link to="/about">About</Link>
            </nav>
    </header>
  );
}

export default Header;