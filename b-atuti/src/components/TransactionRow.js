import React from 'react';

function TransactionRow({ transaction }) {
  return (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>
        {typeof transaction.amount === 'number'
          ? `$${transaction.amount.toFixed(2)}`
          : 'Invalid amount'}
      </td>
    </tr>
  );
}

export default TransactionRow;
