import PropTypes from 'prop-types';
import TableRow from './TransactionsTableRow';
import css from './TransactionTable.module.css';

export default function TransactionsTable({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr className={css.tableHeadRow}>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {transactions.map(item => (
          <tr className={css.tableRow} key={item.id}>
            <TableRow
              type={item.type}
              amount={item.amount}
              currensy={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
};
