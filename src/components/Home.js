// src/components/About.js
import React, {useState}from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('');
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Enter your name: 
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </p>
      {name && <p>Hi {name}, Welcome to the expense tracker! We're glad you're here.</p>}
      <nav>
        <p>Where would you like to go?</p>
        <Link to="/expense">Expense Tracker</Link>
        <Link to="/spending">Spending Record</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Home;