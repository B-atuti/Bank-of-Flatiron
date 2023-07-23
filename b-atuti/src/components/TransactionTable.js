import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions }) {
  // Check if transactions is not an array or is empty
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return <p>No transactions to display.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
