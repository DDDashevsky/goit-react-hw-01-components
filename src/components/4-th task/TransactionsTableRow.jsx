import PropTypes from 'prop-types';
import css from './TransactionTable.module.css';

export default function TransactionsTableRow({ type, amount, currensy }) {
  return (
    <>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currensy}</td>
    </>
  );
}

TransactionsTableRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currensy: PropTypes.string,
};
