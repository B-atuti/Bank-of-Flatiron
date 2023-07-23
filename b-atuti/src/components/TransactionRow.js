// TransactionRow.js
import React from 'react';

function TransactionRow({ transaction }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>
        {transaction.amount === null
          ? 'No amount provided'
          : `$${transaction.amount.toFixed(2)}`}
      </td>
    </tr>
  );
}

export default TransactionRow;
