import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('');
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-300 flex flex-col items-center justify-center">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-300 p-6 rounded-md text-white max-w-full w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
        <h1>Home Page</h1>
        <p>
          Enter your name: 
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </p>
        {name && <p>Hi {name}, Welcome to the expense tracker! We're glad you're here.</p>}
        <nav>
          <p>Where would you like to go?</p>
          <Link to="/fields">Expense Tracker</Link>
          <Link to="/spendingrecord">Spending Record</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;