import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions }) {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return <p>No transactions to display.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <TransactionRow key={index} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
