import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import '../App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions data from the JSON DB server on component mount
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.log(error));
  }, []);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Function to filter transactions based on the search query
  const handleFilterTransactions = (searchTerm) => {
    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar handleSearch={handleFilterTransactions} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
