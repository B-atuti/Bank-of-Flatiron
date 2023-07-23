import React from 'react';

const TransactionFormFields = ({ newTransaction, handleInputChange }) => {
  return (
    <div>
      <input
        type="text"
        name="date"
        value={newTransaction.date}
        onChange={handleInputChange}
        placeholder="Date"
      />
      <input
        type="text"
        name="description"
        value={newTransaction.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={newTransaction.category}
        onChange={handleInputChange}
        placeholder="Category"
      />
      <input
        type="text"
        name="amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
        placeholder="Amount"
      />
    </div>
  );
};

export default TransactionFormFields;
