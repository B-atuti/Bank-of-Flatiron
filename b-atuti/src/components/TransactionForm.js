// TransactionForm.js
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
    const amountValue = parseFloat(newTransaction.amount);

    if (!isNaN(amountValue)) {
      addTransaction({ ...newTransaction, amount: amountValue });
    } else {
      addTransaction({ ...newTransaction, amount: null });
    }

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
      <button type="submit"> Add Transaction </button>
    </form>
  );
};

export default TransactionForm;
