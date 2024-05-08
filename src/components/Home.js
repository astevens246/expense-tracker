import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('');
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 to-blue-300">
        <div className="flex flex-col items-center justify-center p-6 rounded-md text-white max-w-full w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto bg-gradient-to-r from-indigo-600 to-blue-300">
          <h1 className="text-4xl mb-4">Budget Buddy</h1>
          <p className="mb-4">
            Enter your name: 
            <input type="text color" value={name} onChange={e => setName(e.target.value)} className="ml-2 p-1 rounded border border-white" />
          </p>
          { name && <p className="mb-4 text-3xl">Hi <span className="text-orange-500 font-bold">{name}</span>, Welcome to Budget Buddy! We're glad you're here!</p> }           <nav>
            <p className="mb-2">Where would you like to go?</p>
            <Link to="/fields" className="block mb-2 text-2xl text-orange-500 hover:text-purple-900 font-bold">Expense Tracker</Link>
            <Link to="/spending" className="block mb-2 text-2xl text-orange-500 hover:text-purple-900 font-bold">Spending Record</Link>
            <Link to="/about" className="block mb-2 text-2xl text-orange-500 hover:text-purple-900 font-bold">About</Link> 
          </nav>
        </div>
      </div>
    );
}

export default Home;