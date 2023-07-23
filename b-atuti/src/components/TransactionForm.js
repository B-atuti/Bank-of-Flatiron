import React, { useState } from 'react';
import TransactionFormFields from './TransactionFormFields';

const TransactionForm = ({ addTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(newTransaction);
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TransactionFormFields
        newTransaction={newTransaction}
        handleInputChange={handleInputChange}
      />
      <button type="submit"> Add  </button>
    </form>
  );
};

export default TransactionForm;
